require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req,res)=>{
    res.send('Hello World')
})

app.get('/lavi', (req,res)=>{
    res.send('Hello Lavi')
})

app.listen(process.env.PORTf, ()=>{
    console.log(`Example app listening on port ${port}`)
})