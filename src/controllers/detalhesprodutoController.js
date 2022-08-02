var db = require('../database/models/index');
const Product = require('../database/models/Product');
const Arcana = require('../database/models/Arcana');


const detalhesprodutoController = {
    detalhes: async (req, res) => {
        let { id } = req.params
        try {
            const product = await db.Product.findOne({
                where:{
                    id: id
                }, include: "arcana"
            })
            res.render('detalhesproduto', { product })
        } catch (e) {
            console.log('e', e.message)
            res.send('não funcionou')
        }
    },
};


module.exports = detalhesprodutoController;