const express = require('express');
const router = express.Router();
const { body, check } = require('express-validator');
const validation = [
    check('e-mail')
        .notEmpty().withMessage('Digite seu e-mail para continuar').bail().isEmail().withMessage('Use um endereço de e-mail válido'),
    check('password')
        .notEmpty().withMessage('Você não inseriu uma senha')
]

const loginController = require('../controllers/loginController');


router.get('/login', loginController.main);
router.post('/login', validation, loginController.login)


module.exports = router;
