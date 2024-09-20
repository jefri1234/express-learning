const express = require('express')

const app = express()

app.listen(3000,function(){
    console.log('server is running on port 3000')
})

//midlleware= permite que express reconosca los formatos JSON que le envia el cliente
app.use(express.json())
app.use(express.text())

//para que express entienda los datos que vienen de un  formulario añado este middleware
//especificar que es un url simple que no necesite interpretar nada complicado, solo dato texto😱
app.use(express.urlencoded({extended:false}))

//creacion ruta post 
//del REQUEST realizo una extraccion del BODY 
//obtengo los valores del body
//con esa data puedo buscar, guardar, y muchas operaciones que yo quiera
app.post('/crear',function(req,res){
    const {nombre,edad} = req.body
    const usuario = {nombre,edad}
    res.json({
        mensaje:'usuario creado',
        usuario
    })
})