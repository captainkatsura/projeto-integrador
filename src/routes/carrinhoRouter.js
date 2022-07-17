const express = require('express');
const router = express.Router();

const carrinhoController = require('../controllers/carrinhoController');


router.get('/carrinho', carrinhoController.main);


module.exports = router;
