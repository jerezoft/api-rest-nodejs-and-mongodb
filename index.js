'use strict' // para poder usar nuevas caracteristicas del em5 y em6
var app= require("./app")
var mongoose = require("mongoose")
//----------------------------------------------------------------------------------------------------------
// vamos a configurar el puerto si el puerto estaconfigurado a nivel de maquina como una variable de entorno
// para produccion
var port = process.env.PORT || 3678
//----------------------------------------------------------------------------------------------------------
mongoose.connect('mongodb://localhost:27017/CursoFavoritos',function(err,res){
  if (err) {
        throw err
  }else{

        app.listen(port, () => {
        console.log("Api rest favoritos funcionando en http://localhost:"+port)
        console.log("Estas conectado a mongo que bien");
    })

  }

})
//----------------------------------------------------------------------------------------------------------
