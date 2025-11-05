const db = require(`../db/db`);
const Joi = require(`joi`);

 
const produtoSchema = Joi.object({
    nomeProduto: Joi.string().required(),
    descricao: Joi.string().required(),
    valorUnit: Joi.string().required(),
    imagem: Joi.string().allow(" ")
 
});
exports.listarProdutos = async (req, res) => {
    try {
        const [result] = await db.query(`SELECT * FROM produto`);
        res.json(result);
    } catch (err) {
        console.error(`ERRO AO BUSCAR PRODUTO:`, err);
        res.status(500).json({ error: `ERRO INTERNO DO SERVIDOR` });
    }
};
 
exports.buscarProdutoId = async (req, res) => {
    const { codigoProduto } = req.params;
 
    try {
        const [result] = await db.query(`SELECT * FROM produto WHERE codigoProduto = ?`, [codigoProduto])
        if (result.length === 0) {
            return res.status(404).json({ error: `Produto não encontrado` });
        }
        res.json(result[0]);
 
    } catch (err) {
        console.error(`Erro ao buscar produto:`, err);
        res.status(500).json({ error: `Erro interno do servidor` });
 
    }
};
exports.buscarProdutoNome = async (req, res) => {
    const { nomeProduto } = req.params;
 
    try {
        const [result] = await db.query(`SELECT * FROM produto WHERE nomeProduto LIKE ?`, [`${nomeProduto}%`]);
        if (result.length === 0) {
            return res.status(404).json({ error: `Produto não encontrado` });
        }
        res.json(result);
 
    } catch (err) {
        console.error(`Erro ao buscar produto:`, err);
        res.status(500).json({ error: `Erro interno do servidor` });
    }
};
 
exports.adicionarProduto = async (req, res) => {
    const { nomeProduto, descricao, valorUnit, imagem } = req.body;
    //validação dos dados com joi
    const { error } = produtoSchema.validate({ nomeProduto, descricao, valorUnit, imagem });
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    const novoProduto = { nomeProduto, descricao, valorUnit, imagem };
    try {
        await db.query(`Insert Into produto set ?`, novoProduto);
        res.json({ message: `produto adicionado com sucesso` })
 
    } catch (err) {
        console.error(`Erro ao adicionar produto:`, err);
        res.status(500), json({ error: `Erro ao adicionar produto` })
 
    }
 
};
 
exports.atualizarProduto = async (req, res) => {
    const { codigoProduto } = req.params;
    const { nomeProduto, descricao, valorUnit, imagem } = req.body;
 
    const { error } = produtoSchema.validate({ nomeProduto, descricao, valorUnit, imagem });
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
 
    }
    const produtoAtualizado = { nomeProduto, descricao, valorUnit, imagem };
    try {
        await db.query(`UPDATE produto SET ? WHERE codigoProduto = ?`, [produtoAtualizado, codigoProduto]);
        res.json({ message: `Produto atualizado com sucesso` });
    } catch (err) {
        console.error(`Erro ao atualizar produto`, err);
        res.status(500).json({ error: `Erro ao atualizar produto` })
    }
};
 
exports.deletarProduto = async (req, res) => {
 
    const { codigoProduto } = req.params;
 
    try {
        await db.query(`Delete from produto Where codigoProduto = ?`, [codigoProduto]);
 
    } catch (err) {
        console.error(`Erro ao deletar produto:`, err);
        res.status(500).json({ error: `Erro ao deletar prduto` });
 
    }
};