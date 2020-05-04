var usersModel = require('../models/users.model');
var userCtrl = {};

userCtrl.getRegistro = function (req, res, next) {
  res.json({ formRegistro: 'ok' });
};

userCtrl.postResgistro = async function (req, res, next) {
  let createUser = new usersModel({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  let data = await createUser.save();
  res.status(201).json({ stauts: 'ok', data: data });
};

userCtrl.getLogin = function (req, res, next) {
  res.json({ formLogin: 'ok' });
};

userCtrl.postLogin = async function (req, res, next) {
  let email = req.body.email;
  let pass = req.body.pass;
  let login = await usersModel.find({email:email, password:pass});
  if (login != '' || login != '') {
    res.status(201).json({ status: 'You are Login' });
  } else {
    res.status(201).json({ status: 'You are not Login' });
  }
};

module.exports = userCtrl;
