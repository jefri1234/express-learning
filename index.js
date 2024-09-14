console.log("hey jeff")

const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.sendFile('./static/index.html', {
        root: __dirname
    })
})

app.get('/product', (req, res) => {
    res.send("todos los productos")
})


//DE EXPRESS VAS USAR SU METODO JSON 
//DE ESTA FORMA VA PODER ENTENDER express ESTOS JSON QUE LE ESTA ENVIANDO EL CLIENTE 

//lo mismo con los demas
app.use(express.json())
app.use(express.text())

//req.body -> el esta tratando de entender ese dato pero NO LO ENTIENDE para eso usamos el  app.use(express.json())


//Metodo post  usando el REQUEST
app.post('/crear',(req,res)=>{
    console.log(req.body)
    res.send({
        "mensaje": "producto creado",
        "dato":req.body
    })
})

//ruta con parametros 
app.get('/ropas/:ropa',(req,res)=>{
    console.log(typeof(req.params.ropa))
    console.log(req.params)
    res.send("pagina ropas :"+req.params.ropa)
})

//ruta con parametros  
app.get('/suma/:n1/:n2',(req,res)=>{
    //realizar destructuracion osea obtener los valores
    //de los parametros haciendo de esta forma 
    const {n1,n2}=  req.params
    
    res.send({
        "suma":parseInt(n1)+parseInt(n2)
    })
})

//solo devuelve el codigo de estado nada mas 
app.get('/islive',(req,res)=>{
    res.sendStatus(100)
})

//creando una api de productos 
app.get('/api/productos',(req,res)=>{
    res.json(
        {
            "productos": [
                {
                    "id": 1,
                    "nombre": "producto 1",
                    "descripcion": "producto 1 descripcion",
                    "precio": 1000
                },
            ]
        }
    )
})

app.get('/search',(req,res)=>{
    const {nombre , categoria} = req.query
    res.send(`buscando el producto: ${nombre} y ${categoria}`)
})


//esta es una ruta especial osea si no hay ninguna ruta esta se ejecutara
//Nos muestra codigo estado y nos muestra un mensaje
app.use((req,res)=>{
    res.status(400).send("no se encontro la ruta")
})

app.listen(3000)
