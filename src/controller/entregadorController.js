const db = require(`../db/db`);
const joi = require(`joi`)
 
const entregadorSchema = joi.object({
    nomeEntregador: joi.string().required(),
    cpfEntregador: joi.string().length(11).required(),
    telefone: joi.string().length(11).required(),
});
 
exports.listarEntregador = async (req, res) => {
    try {
        const [result] = await db.query
            (`SELECT * FROM entregador`);
        res.json(result);
    } catch (err) {
        console.error(`Erro ao buscar entregador:`, err);
        res.status(500).json({ error: `Erro interno do servidor` });
    };
};
 
exports.listarEntragadorCpf = async (req, res) => {
    const { cpfEntregador } = req.params;
    try {
        const [result] = await db.query
            (`SELECT * FROM entregador WHERE cpf = ?`, [cpfEntregador]);
        if (result.length === 0) {
            return res.status(404).json({ error: 'Entregador não encontrado' })
        }
        res.json(result[0]);
    } catch (err) {
        console.error(`Erro ao buscar entregador`, err);
        res.status(500).json({ error: `Erro interno do servidor` });
    }
};
exports.deletarEntregador = async (req, res) => {
    const { cpfEntregador } = req.params;
    try {
        await db.query(`DELETE FROM cliete WHERE cpfentregador = ?`, [cpfEntregador]);
        res.json({ message: `Entregador deletado com sucesso ` });
    } catch (err) {
        console.error(`Erro ao deletar entregador:`, err);
        res.status(500).json({ error: `Erro ao deletar entregador` });
    }
};
 
exports.adiconarEntregador = async (req, res) => {
const { codigoEntregador, nomeEntregador, cpfEntregador, telefone } = req.body;
 
const { error } = entregadorSchema.validate ({ codigoEntregador, cpfEntregador, nomeEntregador, telefone})
if (error) {
    return res.status(400).json({ error: error.details[0].message});
}
try {
    const novoEntregador = { codigoEntregador, cpfEntregador, nomeEntregador, telefone : hash };
    await db.query(`INSERT INTO entregador SET ?`, novoEntregador);
} catch (err) {
    console.error(`ERRO AO ADICIONAR ENTREGADOR:`, err);
    res.status(500).json({ error: `ERRO AO ADICIONAR ENTREGADOR`})
}
};