const { validationResult } = require('express-validator');

const loginController = {
    main: (req, res) => {
        res.render('login');
    },
    login: (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            console.log(errors.mapped())
            return res.render('home', { errors: errors.mapped() })
        }

        res.redirect('/')
    }
};


module.exports = loginController;