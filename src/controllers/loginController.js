const { validationResult, body } = require('express-validator');
var db = require('../database/models/index');
const bcrypt = require('bcrypt');
var User = require('../database/models/User')

const loginController = {
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
                    email
                }
            })

            if(!usuarioSalvo){
                return res.send('e-mail não encontrado')
            }
            if(!bcrypt.compareSync(senha, usuarioSalvo.senha)){
                return res.send('senha incorreta')
            }

            req.session.usuario = usuarioSalvo;

            if(logado != undefined){
                res.cookie('logado', usuarioSalvo, { maxAge:180000 })
            }

            res.redirect("/paginausuario")
            console.log(usuarioSalvo)
        }   catch(e) {console.log(e.message)}

    }
};


module.exports = loginController;