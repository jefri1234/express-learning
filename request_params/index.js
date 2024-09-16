const express= require('express')

const app= express()

app.listen(3000,()=>{
console.log("sever in the port 3000")
})


//podemos extrer los parametros 3 FORMAS
//1 extraccion del req.params 
//2 accediendo al req.param y su valor = req.params.valor
//3 accediendo directo en el params y descartamos req y llamamos solo params= pero no es recomendable

app.get('/products/:product',(req,res)=>{
    //visualziar de que tipo es lo viene en el params
    console.log(typeof(req.params.product))//tipo (STRING)
    const product=req.params.product
    res.send('the product is' + product)
})