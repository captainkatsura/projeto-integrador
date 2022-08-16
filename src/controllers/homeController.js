var db = require('../database/models/index');
const Arcana = require('../database/models/Arcana');

const homeController = {
    home: async (req, res) => {
        // res.render('home');
        try{
            const arcanas = await db.Arcana.findAll();
            res.render('home', { arcanas: arcanas })
        } catch(e) {
            console.log('e', e.message)
            res.send('Não.')
        }
    }
};


module.exports = homeController;