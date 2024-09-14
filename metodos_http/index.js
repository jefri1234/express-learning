const express= require('express')
const app= express()

app.listen(3000,()=>{
    console.log('server is running on port 3000')
})

//DICIENDO A EXPRESS QUE PUEDA RECONOCER JSON QUE LE ENVIA EL CLIENTE
app.use(express.json())

//CREACION DE RUTAS CON TODOS LOS VERBOS HTTP

app.get('/',function(req,res){
    res.json({
        mensaje:'Hola mundo',
        nombre:'Juan'
    })
})

app.post('/crear',(req,res)=>{
    //EXTRACION DEL REQUEST BODY lo que llega en el body de la request
    const {nombre,edad}=req.body
    res.json({
        mensaje: `Hola ${nombre} tienes ${edad} años`
        })
})

app.put('/update',(req,res)=>{
    const {nombre,edad}=req.body
    res.json({
        dato:"acutalizado",
        mensaje: `Hola ${nombre} tienes ${edad} años`
        })
})

app.delete('/delete',(req,res)=>{
    res.json({
        mensaje: 'Dato eliminado'
        })
})