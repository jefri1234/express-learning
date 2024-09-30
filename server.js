const express = require('express')

const app = express()
//GET ENVIRONMENT VARIABLE 

app.listen(3000,function(){
    console.log("sever on")
})

app.get('/',(req,res)=>{
    res.send("ruta inicial")
})

app.get('/jeff/',(req,res)=>{
    if(req.query.zapatilla=="jordan" & req.query.gorra=="nike") {
        res.send("ropas encontradas")
    }    
    else{
        res.send("no tiene queris")
    }
    
})