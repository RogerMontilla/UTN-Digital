var express = require('express');
var router = express.Router();

router.get('/registro', function (req, res, next) {
  res.json({ formRegistro: 'ok' });
});

router.post('/registro', function (req, res, next) {
  res.json({ postRegistro: 'ok' });
  console.table({ user: 'pedro', pass: '1234', email: 'pedro@gmail.com' });
});

router.get('/login', function (req, res, next) {
  res.json({ formLogin: 'ok' });
});

router.post('/login', function (req, res, next) {
  res.json({ postLogin: 'ok' });
  console.table({ user: 'pedro', pass: '1234'});
});

module.exports = router;
