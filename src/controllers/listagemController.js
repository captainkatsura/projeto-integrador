var db = require('../database/models/index');
const Product = require('../database/models/Product');



const listagemController = {
    index: async (req, res) => {
        try {
            const products = await db.Product.findAll({
                include: "arcana"
            })
            res.render('listagem', { products: products })
        } catch (e) {
            console.log('e', e.message)
            res.send('grrr')
        }

    ;
    },
    categorias: async (req, res) => {       // //passar isso p/ home
        try {
             const products = await db.Product.findAll({
                include: [
                    {association: 'persona'}
                ]
             })
             res.render('listagem', {
                products
             })
         } catch (e) {
            console.log('e', e.message)
            res.send('deu ruim')
        }
    }
};


module.exports = listagemController;