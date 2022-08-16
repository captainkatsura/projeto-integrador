const express = require('express');
const router = express.Router();

const listagemController = require('../controllers/listagemController');


router.get('/listagem', listagemController.index);
router.get('/listagem/:id', listagemController.categorias); //passar isso p/ home


module.exports = router;
