const express = require('express')
const morgan = require('morgan')//usams un middleware lo instalamos
const app = express()

app.listen(3000)

//creacion de un middleware

//instale un middleware y lo ejecuto
//Devuelve imformacion como= fecha que se hizo la peticio
//de que navegador se hizo , el metodo http y mas 
//ASI HAY MAS MIDDLEWARE QUE PODEMOS USARLOS = validar datos,subir img,comprobar si user tiene valor en su peticion como cookie
app.use(morgan())

//middleware para que expres pueda reconocer estos formatos😐😱
app.use(express.json())
app.use(express.text())

//next => continua con tu flujo normal
app.use(function(req,res,next){
    console.log('middleware')
    console.log("URL:"+req.url +"---- METODO:"+ req.method)
    next()
})

app.use(function(req,res,next){
    if(req.query.login=='jeff@gmail.com'){
        console.log('logueado')
        next()
    }
    else{
        res.send('no logueado')
        }
})

app.get('/profile',function(req,res){
    res.send('visit route profile')
})