'use strict'
var Favorito = require('../models/favorito')
//------------------------------------------------------------------------------------------------------------

function getIndex(req,res){
  res.status(200).send('<html><body>'
		      + '<h1>Saludo</h1>'
		      + '<form method="get" action="/saludo">'
		      + '<label for="nombre">¿Cómo te llamas?</label>'
		      + '<input type="text" name="nombre" id="nombre">'
		      + '<input type="submit" value="Enviar"/>'
		      + '</form>'
		      + '</body></html>');

}

//-----------------------------------------------------------------------------------------------------
function favoritos(req,res){
      if (!req.params.nombre) {
      var  nombre = "default"
    }else{
      var nombre = req.params.nombre
    }
    res.status(200).send({data:[1,2,3,4],texto: "Hola mundo con nodeJS express",nombre: nombre})
}
//-----------------------------------------------------------------------------------------------------

function prueba(req,res){
    res.status(200).send({data:[1,2,3,4],texto: "Hola mundo con nodeJS express"})
}

//----------------------------------Listar--un Favorito-----------------------------------------------------------------

function getFavorito(req,res){
    var id = req.params.id
    Favorito.findById(id,function(err,doc){
            if (err) {
              res.status(500).send({message : "Error al devolver los marcadores"})
            }else{
              if(!doc){
                     res.status(404).send({message : "No existen marcadores"})
              }else{
                     res.status(200).send({doc})
              }
            }


            })
  }

//-----------------------------------------------------------------------------------------------------
//----------------------------------Listar-------------------------------------------------------------------

function getFavoritos(req,res){
                          //-title desendente  title asendente
    Favorito.find({}).sort('-_id').exec(function(err,favoritos){
      if (err) {
          res.status(500).send({message : "Error al devolver los marcadores"})
      }else{
            if (!favoritos) {
                 res.status(404).send({message : "No existen marcadores"})
            }else{
                 res.status(200).send({favoritos})
            }
      }
    })


}
//-------------------------------------------------------------------------------------------------------
//----------------------------------Guardar un Favorito-----------------------------------------------------------------

function SaveFavorito(req,res){
    var favorito = new Favorito();
    var params = req.body

    favorito.title = params.title
    favorito.descripcion = params.descripcion
    favorito.url = params.url
    favorito.save(function(err,doc){
            if (err) {
                res.status(500).send({message : err.errors.title})
            }else{
               res.status(200).send({message: "Documento perfectamente guardado felicitaciones"})
            }
    })

}
//-----------------------------------------------------------------------------------------------------
//----------------------------------Update--un Favorito-----------------------------------------------------------------

function UpdateFavorito(req,res){
          var id = req.params.id
          var parametros = req.body
          Favorito.findByIdAndUpdate(id,parametros,function(err,doc){
             if(err){
                   res.status(500).send({message : "Error al actulizar elmarcados"})
             }else{
                  res.status(200).send({message : "Registros actualizados correctamente"})
             }
          })

}
//-----------------------------------------------------------------------------------------------------
//----------------------------------Delete--un Favorito-----------------------------------------------------------------

function DeleteFavorito(req,res){
  var id = req.params.id
  Favorito.findById(id,function(err,doc){
          if (err) {
            res.status(500).send({message : "Error al devolver los marcadores"})
          }
          if(!doc){
                 res.status(404).send({message : "No existen marcadores"})
          }else{
                doc.remove(function(err){
                  if(err){
                      res.status(500).send({message : "El marcador no se ha borrado "})
                  }else{
                    res.status(200).send({message : "El marcador se haeliminado "})
                  }
                })
          }

          })
}
//-----------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------


module.exports = {
  prueba,
  getFavorito,
  getIndex,
  getFavoritos,
  UpdateFavorito,
  DeleteFavorito,
  SaveFavorito
}
