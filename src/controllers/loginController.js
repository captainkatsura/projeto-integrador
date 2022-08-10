const { validationResult, body } = require('express-validator');
var db = require('../database/models/index');

const loginController = {   //I have no idea of what I'm doing
    main: (req, res) => {
        res.render('login');
    },
    login: async (req, res) => {

        let email = req.body.email;
        let senha = req.body.senha;
        let logado = req.body.logado;

        try {
            const usuarioSalvo = await db.User.findOne({
                where: {
                    email,
                    senha
                }
            })

            if(usuarioSalvo != null){
                req.session.usuario = usuarioSalvo;

                if(logado != 'undefined'){
                    res.cookie('logado', usuarioSalvo.email, {maxAge:650000000})
                }

                res.redirect('/paginausuario')
            } else {
                res.redirect('/login')
            }

            console.log(usuarioSalvo)
        }   catch(e) {console.log(e.message)}


        // if(email != usuarios.email || senha != usuarios.senha){
        //     return res.send("Usuário inválido!!!")
        // }



        // const errors = validationResult(req);

        // if (!errors.isEmpty()) {
        //     console.log(errors.mapped())
        //     return res.render('login', { errors: errors.mapped() })
        // }

        // req.session.usuario = usuarioSalvo // ??????

        // res.render('home', {usuario:req.session.usuario})
    }
};


module.exports = loginController;