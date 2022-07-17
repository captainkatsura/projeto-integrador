const express = require('express');
const router = express.Router();

const listagemController = require('../controllers/listagemController');


router.get('/listagem', listagemController.index);


module.exports = router;
