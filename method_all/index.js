const express = require('express')

const app = express()

app.listen(4000)

app.all('/',function(req,res){
    res.send('Hello World')
})