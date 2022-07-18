const { validationResult } = require('express-validator');

const loginController = {
    main: (req, res) => {
        res.render('login');
    },
    login: (req, res) => {

        res.redirect('/home')
    }
};


module.exports = loginController;