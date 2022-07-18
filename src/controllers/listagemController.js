var db = require('../database/models/index')

const listagemController = {
    index: (req, res) => {
        res.render('listagem');
    },
    categorias: async (req, res) => {       // **rota GET **
        try {
             const produtos = await db.Product.findAll({
                include: 'categoria'
             })
             res.render('listagem', {
                produtos
             })
         } catch (e) {
            console.log('e', e.message)
            res.send('deu ruim')
        }
    }
};


module.exports = listagemController;