const paginausuarioController = {
    main: (req, res) => {
        res.render('paginausuario', { usuario:req.session.usuario });
    },
    editar: (req, res) => {
        res.render('editar', { usuario:req.session.usuario })
    }
};


module.exports = paginausuarioController;