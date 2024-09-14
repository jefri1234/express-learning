
const express= require('express')

const app= express()

app.listen(3000, function(){
    console.log("levantado en el puerto 3000")
})

app.get('/',function(req,res){
    res.send("Hola mundo")
})

app.get('/archivo',function(req,res){
    res.sendFile('./boy.jpeg',{
        root: __dirname
    })
})

//enviar codigo de ESTADO

//404=> no encontre lo que intentas eliminar
//500=> error interno del servidor
//200=> todo bien
//204=> todo bien pero no devolvo nada de contenido solo (respuesta estado) 


//enviar solo un codigo de estado
app.get('isAlive',function(req,res){
    res.sendStatus(204)
})