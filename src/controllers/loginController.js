const { validationResult, body } = require('express-validator');
var db = require('../database/models/index');

const loginController = {   //I have no idea of what I'm doing
    main: (req, res) => {
        res.render('login');
    },
    login: async (req, res) => {
        let { usuarios } = require('../database/models/User');
        let { email, senha } = req.body;
        let usuarioSalvo = await usuarios.findOne({
            where: {
                email: email,
                password: senha
            }
        })

        if(usuarioSalvo != null){
            res.redirect('/')
        } else{
            res.redirect('/editar')
        }

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