const mysql = require('mysql2/promise');
module.exports.pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'utn_digital',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
}); // query data base