const express = require('express');
const router = express.Router();
let auth = require('../middlewares/auth')

const carrinhoController = require('../controllers/carrinhoController');


router.get('/carrinho', auth, carrinhoController.main);


module.exports = router;
