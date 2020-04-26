var express = require('express');
var router = express.Router();
var {getRegistro, postResgistro, getLogin, postLogin} = require('../controllers/users.controller')

router.get('/registro', getRegistro);

router.post('/registro', postResgistro);

router.get('/login', getLogin);

router.post('/login', postLogin);

module.exports = router;
