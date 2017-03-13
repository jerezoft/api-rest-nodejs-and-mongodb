var express = require("express")
//----------------------------------------------------------------------------------------------------------
// es una libreria que nospermite recibir cualquier parametro por elprotocolo http
// esos datos que nos llegan lo combierte en un objeto javaScript trabajar como sifuera un objeto JSON

var bodyParser = require("body-parser") //  esto basicamente esun middelware dentro jso es una funcionalidad que se ejecuta antes
//de que se ejecute el propio codigo de node se ejecuta antes que elcodigo que escribimos
//----------------------------------------------------------------------------------------------------------
var app = express()
var api = require("./routes/favorito")

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
//----------------------------------------------------------------------------------------------------------
//------------Para evitar problemas con nuestras peticiones ajax que nuestro cliente valla a  consumir.
//--creamo un middelware propio vamos hacer una funcion que se va cargar siempreque se haga una peticion
// a nuestro api        next va salir cuando esa peticion acabe de hacerse
// vamos a configurar nuestroheader para curarnos en salud
app.use(function(req,res,next){              //* cualquiera puede hacer peticiones a nuestra api rest
  res.header('Access-Control-Allow-Origin','*')
  res.header('Access-Control-Allow-Headers','A-API-kEY, Origin, X-Requested-With,Content-Type,Accept,Access--Control-Request-Method')
  res.header('Access-Control-Allow-Methods','GET','POST','PUT','DELETE','OPTIONS')
  res.header('Allow','GET','POST','PUT','DELETE','OPTIONS')

  next()
})



//----------------------------------------------------------------------------------------------------------
app.use('/api',api)


module.exports = app
