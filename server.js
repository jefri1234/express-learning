const express = require('express')
const morgan =require('morgan')

const app = express()
//GET ENVIRONMENT VARIABLE 
const puerto= process.env.PORT

app.listen(puerto,function(){
    console.log("sever on")
})

app.get('/jeff',(req,res)=>{
    res.send("ruta inicial")
})