var express = require('express');
var router = express.Router();

var database = require('../../JSON/database.js');


/* GET users listing. */
router.get('/policiales', function (req, res, next) {
    res.send(database.policiales.articles[0]);
});

router.get('/deportes', function (req, res, next) {
  res.send(database.deportes.articles[0]);
});

router.get('/politica', function (req, res, next) {
  res.send(database.politica.articles[0]);
});

module.exports = router;
