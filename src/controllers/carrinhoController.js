const carrinhoController = {
    main: (req, res) => {
        res.render('carrinho', { usuario:req.session.usuario });
    },
};


module.exports = carrinhoController;