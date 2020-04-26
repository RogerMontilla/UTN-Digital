var db = require('../bin/mysql');

var usrModel = {};

usrModel.createUser = async (data) => {
  await db.pool.query('INSERT INTO usuarios SET email = ?, clave = ?, nombre = ?, apellido = ?', [
    data.email,
    data.clave,
    data.nombre,
    data.apellido,
  ]);
};

usrModel.loginUser = async (data) => {
  const [rows, fields] = await db.pool.execute(`SELECT * FROM usuarios WHERE nombre = '${data}'`);
  return rows;
};

module.exports = usrModel;
