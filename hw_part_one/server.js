const express = require("express")
const app = express()

app.get('/greeting',(req,res)=> {
    res.send('Hello,stranger')
})

app.get('/greeting/:name',(req,res)=> {
    res.send(`Hello there, ${req.params.name}`)
})

app.listen(3001, ()=> {
    console.log('port connected')
})
