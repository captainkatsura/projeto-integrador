const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/images/user_pictures');
    },
    filename: (req, file, cb) => {
        let fileName = `${Date.now()}_img${path.extname(file.originalname)}`;
        cb(null, fileName);
    }
})

const uploadFile = multer({ storage })

const { body } = require('express-validator');
const validation = [
    // check('e-mail')
    //     .notEmpty().withMessage('Digite seu e-mail para continuar').bail().isEmail().withMessage('Use um endereço de e-mail válido'),
    // check('password')
    //     .notEmpty().withMessage('Você não inseriu uma senha'),
    body('user_name').notEmpty().isString().withMessage("Campo obrigatório!!").bail().trim(),
    body('email').notEmpty().isEmail().withMessage("Campo obrigatório!!").bail().trim().bail().normalizeEmail(),
    body('phone_number').notEmpty().withMessage("Campo obrigatório!!"),
    body('cpf').notEmpty().withMessage("Campo obrigatório!!"),
    body('street').notEmpty().withMessage("Campo obrigatório!!"),
    body('house_number').notEmpty().withMessage("Campo obrigatório!!"),
    body('district').notEmpty().withMessage("Campo obrigatório!!"),
    body('cep').notEmpty().withMessage("Campo obrigatório!!"),
    body('city').notEmpty().withMessage("Campo obrigatório!!"),
    body('state').notEmpty().withMessage("Campo obrigatório!!"),
    body('country').notEmpty().withMessage("Campo obrigatório!!"),
    body('senha').notEmpty().withMessage("Campo obrigatório!!").bail().trim(),
    // body('user_picture').custom((value, { req }) => {
    //     var file = req(file);
    //     let acceptedExtensions = ['.jpg', '.png', '.gif'];

    //     if(!file) {
    //         throw new Error('Escolhe um arquivo')
    //     } else {
    //         let fileExtension = path.extname(file.originalname);

    //         if(!acceptedExtensions.includes(fileExtension)){
    //             throw new Error(`As extensões permitidas são ${acceptedExtensions.join(', ')}`);
    //         }
    //     }
    //     return true
    // })
    
]

const editarController = require('../controllers/editarController');


router.get('/editar', editarController.main);
// router.post('/editar',uploadFile.single('user_picture'), validation, editarController.cadastrar);
router.post('/editar', validation, editarController.cadastrar);


module.exports = router;
