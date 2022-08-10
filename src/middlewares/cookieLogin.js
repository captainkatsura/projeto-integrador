const db = require('../database/models/index')

const cookieLogin = async (req, res, next) => {
    if(req.cookies.logado != undefined && req.session.usuario == null){
            
        let email = req.body.email;

        try {
            const usuarioSalvo = await db.User.findOne({
                where: {
                    email: email
                }
            }); 
                if(usuario.email == email){
                    req.session.usuario = usuario
                }

        } catch(e) {console.log(e.message)}
    }
    next();

}


module.exports = cookieLogin