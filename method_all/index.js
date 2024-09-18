const express = require('express')

const app = express()

app.listen(4000)

app.all('/',function(req,res){
    res.send('Hello World')
})
//este metodo all lo que hace es lo siguiente= LA RUTA / tiene todos los verbos http 
//get post put delete etc 
//si no especificamos un metodo en la ruta, por defecto se ejecuta el metodo all
//esto es muy util para las rutas que no necesitan de un metodo especifico
//como por ejemplo la ruta raiz /
