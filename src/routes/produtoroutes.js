const express = require(`express`)
const router = express.Router();
const produtoController = require(`../controller/produtoController`);
 
router.get(`/Produto`, produtoController.listarProdutos);
router.get(`/Produto/:codigoProduto`, produtoController.buscarProdutoId);
router.get(`/Produto/nome/:nomeProduto`, produtoController.buscarProdutoNome);
router.post(`/Produto`, produtoController.adicionarProduto)
router.put(`/Produto/:codigoProduto`, produtoController.atualizarProduto);
router.delete('/Produto/:codigoProduto', produtoController.deletarProduto);
module.exports = router