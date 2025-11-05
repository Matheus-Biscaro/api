const db = require ('../db/db');
const bcrypt = require('bcrypt');
const { error } = require('console');
const jwt = require('jsonwebtoken');
const { off } = require('process');
require('dotenv').config();  // Carrega variáveis de ambiente
 
// Obter o segredo do token JWT a partir do .env
const SECRET = process.env.JWT_SECRET || 'defaultsecret'; // Use um valor padrão apenas em desenvolvimento

// Login do cliente
exports.loginCliente = async (req,res) => {
    const {cpf,senha} = req.body;
    
    // Verificação de campos obrigatórios
    if (!cpf || !senha) {
        return res.status(400).json({error: 'CPF e Senha são obrigatórios'});
        
    }
    try {
        // Buscar cliente no banco de dados
        const [results] = await db.query('SELECT * FROM cliente WHERE cpf =?', [cpf]);

        if (results.length === 0) {
        return res.status(401).json({error: 'Cliente não encontrado'});            
        }
        const cliente = results[0];

        //Comparar a senha inserida com a senha armazenada
        const passwordMatch = await bcrypt.compare(senha,cliente.senha);
        if (!passwordMatch) {
            return res.status(401).json({ error: 'Credenciais inválidas'})
            
        }
        // Gerar token JWT
        const token = jwt.sign({cpf: cliente.cpf},SECRET,{expiresIn: '1h'});

        res.status(200).json({
            auth: true,
            token,
            message: 'Usuário logado com sucesso',
        });
    } catch (err) {
        console.error('Erro ao processar login:', err);
        res.status(500).json({ error: 'Erro interno do servidor'});
    }
};

// Middleware para autenticar o tokwn 
exports.autenticarToken = (req,res,next) => {
    // Obter o token do cabeçalho de autorização
    const authHeader = req.header('Authorization');
    const token = authHeader && authHeader.split(' ')[1]; 
    //Extrair o token do formato "Bearer <token>"

    if (!token) {
        return res.status(401).json({ error: 'Token não fornecido'});
    }
    jwt.verify(token,SECRET, (err,decoded) => {
        if (err) {
            return res.status(401).json({error: 'Token inválido'});
            
        }
        req.usuario = decoded;
        next();
    });
};