const express = require('express');
const router = express.Router();
const loginController = require('../controller/loginController');

//Rota para fazer um novo login
router.post('/login', loginController.loginCliente);

module.exports = router;