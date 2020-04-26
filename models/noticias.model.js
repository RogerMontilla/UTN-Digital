var db = require('../bin/mysql');
var noticiasModel = {};

noticiasModel.getPoliciales = async () => {
  const [rows, fields] = await db.pool.execute(`SELECT * FROM noticias WHERE categoria = 'policiales'`);
  return rows;
};

noticiasModel.getDeportes = async () => {
  const [rows, fields] = await db.pool.execute(`SELECT * FROM noticias WHERE categoria = 'deportes'`);
  return rows;
};

noticiasModel.getPolitica = async () => {
  const [rows, fields] = await db.pool.execute(`SELECT * FROM noticias WHERE categoria = 'politica'`);
  return rows;
};

noticiasModel.createNoticia = async (data) => {
  await db.pool.query('INSERT INTO noticias SET categoria = ?, descripcion = ?, titulo = ?', [
    data.categoria,
    data.descripcion,
    data.titulo,
  ]);
};

noticiasModel.getAll = async () => {
  const [rows, fields] = await db.pool.execute(`SELECT * FROM noticias`);
  return rows;
};

module.exports = noticiasModel;
