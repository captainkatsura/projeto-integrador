const express = require('express');
const router = express.Router();

const detalhesprodutoController = require('../controllers/detalhesprodutoController');


router.get('/detalhes', detalhesprodutoController.detalhes);


module.exports = router;
