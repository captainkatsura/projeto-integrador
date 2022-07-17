const express = require('express');
const router = express.Router();

const paginausuarioController = require('../controllers/paginausuarioController');


router.get('/usuario', paginausuarioController.main);


module.exports = router;
