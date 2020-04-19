var fs = require('fs');
var database={};
var fileDeportes = 'JSON/deportes.json';
fs.readFile(fileDeportes, (error, data) => {
  if (error) {
    console.log('error al abrir el archivo', error);
  } else {
    database.deportes = JSON.parse(data);
  }
});

var filePolitica = 'JSON/politica.json';
fs.readFile(filePolitica, (error, data) => {
  if (error) {
    console.log('error al abrir el archivo', error);
  } else {
    database.politica = JSON.parse(data);
  }
});

var filePoliciales = 'JSON/policiales.json';
fs.readFile(filePoliciales, (error, data) => {
  if (error) {
    console.log('error al abrir el archivo', error);
  } else {
    database.policiales = JSON.parse(data);
  }
});

module.exports = database;