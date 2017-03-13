'use strict'
var mongoose = require('mongoose')
// Nos va permitir definir esquemas u objetos ytipos de objeto
// va represntar cada uno de losdocumentos guardados en nuestra base de datos
var Schema = mongoose.Schema

var FavoritoSchema = Schema({
  title: {type:String,minlength:[3,"campo title muy corto minimo 4 caracteres"]},
  descripcion: {type:String},
  url:{type: String}
})

module.exports = mongoose.model('Favorito',FavoritoSchema)
