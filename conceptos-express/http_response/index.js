
const express= require('express')

const app= express()
app.listen(3000, function(){
    console.log("levantado en el puerto 3000")
})

//FORMAS EN QUE PUEDE RESPONDER EL SERVIDOR
//1. RESPONDER CON UNA PAGINA HTML
//2. RESPONDER EN FORMATO JSON
//3. RESPONDER EN FORMATO XML
//4. RESPONDER EN FORMATO PLAIN TEXT
//5. RESPONDER CON UN ARCHIVO
//6. RESPONDER CON UNA IMAGEN
//7. RESPONDER CON UN VIDEO
//8. RESPONDER CON UN AUDIO
//10. RESPONDER CON UN ARCHIVO PDF
//11. RESPONDER CON UN ARCHIVO CSV
//12. RESPONDER CON UN ARCHIVO EXCEL
//13. RESPONDER CON UN ARCHIVO WORD
//14. RESPONDER CON UN ARCHIVO POWERPOINT

app.get('/',function(req,res){
    res.send("Hola mundo")
})

app.get('/imagen',function(req,res){
    res.sendFile('./boy.jpeg',{
        root: __dirname
    })
})

app.get('/word',function(req,res){
    res.download('./word.docx',{
        root: __dirname
        })
})
app.get('/pdf',(req,res)=>{
    res.sendFile('./jeff.pdf',{
        root: __dirname
        })

})



// SERVIDOR enviar codigo de ESTADO
//200 OK                        =>todo ok
//404 NOT FOUND
//500 INTERNAL SERVER ERROR     => error interno del servidor
//201 CREATED
//400 BAD REQUEST               => solicitud incorrecta
//201 CREATED
//204=> todo bien pero no devolvo nada de contenido solo (respuesta estado) 


//enviar solo un codigo de estado
app.get('isAlive',function(req,res){
    res.sendStatus(204)
})