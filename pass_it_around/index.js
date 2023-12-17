const express = require("express")
const app = express()


app.get("/", (req, res) => {
    let count = 99
    res.send(`<h1>${count} Bottles of beer on the wall</h1> <a href ="/${count-1}">take one down, pass it around<a>`)
})

app.get("/:num", (req, res) => {
    // if (req.params.num >= 0) {
    // res.send(`<h1>${req.params.num} Bottles of beer on the wall</h1> <a href ="/${req.params.num-1}">take one down, pass it around<a>`)
    // } 
    // if (req.params.num <0) {
    //     res.send('<a href ="/">Start Over<a>')
    //     // res.redirect("/")
    // }
    if (req.params.num > 0) {
    res.send(`<h1>${req.params.num} Bottles of beer on the wall</h1> <a href ="/${req.params.num-1}">take one down, pass it around<a>`)
    }  else {
        res.send(`<h1>${req.params.num} Bottles of beer on the wall</h1> <a href ="/">Start Over<a>`)
    }
})
app.listen(3002, () => {
    console.log('port is listenning...')
})
