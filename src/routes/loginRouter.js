const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const validation = [
    // check('e-mail')
    //     .notEmpty().withMessage('Digite seu e-mail para continuar').bail().isEmail().withMessage('Use um endereço de e-mail válido'),
    // check('password')
    //     .notEmpty().withMessage('Você não inseriu uma senha'),
    body('email').notEmpty(),
    body('password').notEmpty()
]

const loginController = require('../controllers/loginController');


router.get('/login', loginController.main);
router.post('/', validation, loginController.login)


module.exports = router;
