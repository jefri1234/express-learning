const express = require('express')
const morgan =require('morgan')

const app = express()
//GET ENVIRONMENT VARIABLE 
const puerto= process.env.PORT
//MIDDLEWARE
app.use(morgan('dev'))

app.listen(puerto,function(){
    console.log("sever on")
})
app.use(morgan('dev'))

app.get('/',(req,res)=>{
    res.send("ruta inicial")
})