var { createUser, loginUser } = require('../models/users.model');
var userCtrl = {};

userCtrl.getRegistro = function (req, res, next) {
  res.json({ formRegistro: 'ok' });
};

userCtrl.postResgistro = async function (req, res, next) {
  await createUser(req.body);
  res.status(201).json({ status: 'OK' });
};

userCtrl.getLogin = function (req, res, next) {
  res.json({ formLogin: 'ok' });
};

userCtrl.postLogin = async function (req, res, next) {
  let user = req.body.nombre;
  let login = await loginUser(user);
  if (login != '' || login != '') {
    res.status(201).json({ status: 'You are Login' });
  } else {
    res.status(201).json({ status: 'You aren not Login' });
  }
};

module.exports = userCtrl;
