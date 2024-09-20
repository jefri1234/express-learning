const express = require('express')
const morgan =require('morgan')

const app = express()

app.listen(3000,function(){
    console.log("sever on")
})
app.use(morgan('dev'))

app.get('/',(req,res)=>{
    res.send("ruta inicial")
})