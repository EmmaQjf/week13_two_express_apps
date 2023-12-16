const express = require("express")
const app = express()

//greeting
app.get('/greeting', (req, res)=> {
    res.send('Hello,stranger')
})

app.get('/greeting/:name', (req, res) => {
    res.send(`Hello there, ${req.params.name}`)
})

//tip caculation
app.get('/tip/:total/:tipPercentage', (req, res) => {
  res.send(`${req.params.total * req.params.tipPercentage *0.01}`)
})

// magic 8 Ball
app.get('/magic', (req, res) => {
    res.send('<h1>Please ask me a question</h1>')
    // res.redirect('magic/askmeaquestion')
})

app.get('/magic/:askmeaquestion', (req, res) =>{
    // let message = req.params.askmeaquestion;
    // message = message.replaceAll(" ", "%20")
    const array = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
    let note =array[Math.floor(Math.random() * array.length)]
    res.send(note)
})
app.listen(3001, ()=> {
    console.log('port connected')
})
