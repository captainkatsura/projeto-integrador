function auth(req, res, next){
    if(typeof(req.session.usuario) != 'undefined'){
        return next()
    } else {
        return res.send("Faça o login para ter acesso!")
    }

}


module.exports = auth