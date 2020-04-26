var express = require('express');
var router = express.Router();
var { policiales, deportes, politica, getAllNews, createNews } = require('../controllers/noticias.controller');

/* GET users listing. */

router.get('/policiales', policiales);

router.get('/deportes', deportes);

router.get('/politica', politica);

router.get('/', getAllNews);

router.post('/create', createNews);

module.exports = router;
