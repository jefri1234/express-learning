const express = require('express')

const app= express()

app.listen(3000)

app.get('/',(req,res)=>{
    res.json({
        "message": "get"
    })
})

app.post('/',(req,res)=>{
    res.json({
        "message": "post"
    })
})