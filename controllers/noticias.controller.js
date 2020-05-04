var noticiasModel = require('../models/noticias.model');
var noticiasCtrl = {};
var moment = require('moment');
moment.locale('es'); // change the global locale to Spanish

noticiasCtrl.getByCat = async function (req, res, next) {
  let noticiaByCat = await noticiasModel.find({ categoria: req.params.categoria });
  res.status(200).json(noticiaByCat);
};

noticiasCtrl.createNews = async function (req, res, next) {
  let noticiaNew = new noticiasModel({
    titulo: req.body.name,
    descripcion: req.body.descripcion,
    fecha: moment().format('lll'),
    categoria: req.body.categoria,
  });
  let data = await noticiaNew.save();
  res.status(200).json({ status: 'New News Was Successfully Created', data:data });
};

noticiasCtrl.getAllNews = async function (req, res, next) {
  let allNews = await noticiasModel.find({});
  res.status(200).json(allNews);
};

module.exports = noticiasCtrl;
