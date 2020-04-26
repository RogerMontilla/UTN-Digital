var {getPoliciales, getDeportes, getPolitica, getAll, createNoticia} = require('../models/noticias.model')
var noticiasCtrl = {}

noticiasCtrl.policiales = async function (req, res, next) {
    let notPol = await getPoliciales();
    res.status(200).json(notPol);
}

noticiasCtrl.deportes = async function (req, res, next) {
    let notDep = await getDeportes();
    res.status(200).json(notDep);
}

noticiasCtrl.politica = async function (req, res, next) {
    let notPolit = await getPolitica();
    res.status(200).json(notPolit);
}

noticiasCtrl.createNews = async function (req, res, next){
    await createNoticia(req.body);
    res.status(200).json({'status': 'New News Was Successfully Created'})
}

noticiasCtrl.getAllNews = async function (req, res, next) {
    let allNews = await getAll();
    res.status(200).json(allNews);
}


module.exports = noticiasCtrl;