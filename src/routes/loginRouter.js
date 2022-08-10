const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
let auth = require('../middlewares/auth')

const validation = [
    // check('e-mail')
    //     .notEmpty().withMessage('Digite seu e-mail para continuar').bail().isEmail().withMessage('Use um endereço de e-mail válido'),
    // check('password')
    //     .notEmpty().withMessage('Você não inseriu uma senha'),
    body('email').notEmpty().isString(),
    body('password').notEmpty().bail().isEmail()
]

const loginController = require('../controllers/loginController');


router.get('/login', loginController.main);
router.post('/paginausuario', validation, loginController.login)


module.exports = router;
