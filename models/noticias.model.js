const mongoose = require('../bin/mongoose')
const Schema = mongoose.Schema;

const noticiasSchema = new Schema({
    titulo:String,
    descripcion:String,
    fecha:String,
    categoria:String 
})

module.exports = mongoose.model('noticias',noticiasSchema)
