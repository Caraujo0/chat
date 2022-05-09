const express=require ('express')
const app=express()

const http=require('http')
const server =http.createServer(app)

app.get('/', (req,res)=>{
    //res.send('<h1>Aplicación de CHAT</h1>')
    res.sendFile(`${__dirname}/cliente/index.html`)
})

app.listen(3000, ()=>{
console.log('Servidor corriendo en en http://localhost:3000')
})