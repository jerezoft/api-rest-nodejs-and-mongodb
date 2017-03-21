'use extrict'
var express =require("express")
var FavoritoController =  require("../controllers/favorito")
var api = express.Router()

//----------------------------------------------RUTAS--------------------------------------------------------
// Req - lo que recibo
// Res - la respuesta
//api.get('/prueba',FavoritoController.prueba)
api.get('/favorito/:id',FavoritoController.getFavorito)
api.get('/index',FavoritoController.getIndex)
api.get('/favoritos',FavoritoController.getFavoritos)
api.post('/favorito',FavoritoController.SaveFavorito)
api.put('/favorito/:id',FavoritoController.UpdateFavorito)
api.delete('/favorito/:id',FavoritoController.DeleteFavorito)
      //-------------------Recibir parametros URL---------------------------------------------------------------------------------------
// api.get('/favorite/:nombre?',FavoritoController.favorito)
//--------------------------------------FIN-RUTAS------------------------------------------------------------------

module.exports = api;
