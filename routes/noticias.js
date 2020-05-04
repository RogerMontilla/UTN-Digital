var express = require('express');
var router = express.Router();
var {getByCat, createNews, getAllNews} = require('../controllers/noticias.controller');

/* GET users listing. */

router.get('/:categoria', getByCat);

router.get('/', getAllNews);

router.post('/create', createNews);

module.exports = router;
