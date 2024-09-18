const express = require('express')

const app = express()

app.listen(3000)

//creacion de un middleware

//next => continua con tu flujo normal
app.use(function(req,res,next){
    console.log('middleware')
    console.log("URL:"+req.url +"---- METODO:"+ req.method)
    next()
})


app.get('/profile',function(req,res){
    res.send('visit route profile')
})