const express = require('express');
const router = express.Router();

const editarController = require('../controllers/editarController');


router.get('/editar', editarController.main);


module.exports = router;
