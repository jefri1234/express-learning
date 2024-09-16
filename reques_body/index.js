const express = require('express')

const app = express()

app.listen(3000,function(){
    console.log('server is running on port 3000')
})

//midlleware= permite que express reconosca los formatos JSON que le envia el cliente
app.use(express.json())

app.post('/crear',function(req,res){
    const {nombre,edad} = req.body
    const usuario = {nombre,edad}
    res.json({
        mensaje:'usuario creado',
        usuario
    })
})