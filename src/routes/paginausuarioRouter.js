const express = require('express');
const router = express.Router();
let auth = require('../middlewares/auth')

const paginausuarioController = require('../controllers/paginausuarioController');


router.get('/paginausuario', auth, paginausuarioController.main);
router.get('/editar', paginausuarioController.editar)


module.exports = router;
