const express = require("express")
const app = express()
const port = 3000
const test = require("./test")



app.all("/", (req, res, next) => {
    test()
    next()
})

app.get("/", (req, res, next) => {



    res.write("bonjour je suis le get de /")
    next()
})

app.get("/", (req, res) => {
    res.write("bonjour je suis le deuxieme get de /")
    res.end()
})

app.post("/", (req, res) => {

    res.end()
})

//http://localhost:3000/user/45/15/48
app.get("/user/:id/:par1/:par2", (req, res) => {

    res.status(200).json(req.params)
})

//http://localhost:3000/user?id=45&par1=15&par2=48
app.get("/user", (req, res) => {
    console.log(req.query)
    res.status(200).json("/user")
})


app.get("/contact", (req, res) => {
    res.end()
})


app.get("/forum", (req, res) => {
    res.end()
})


app.post("/contact", (req, res) => {
    res.end()
})


app.all("*", (req, res) => {
    res.status(404).send("404")
})


app.listen(port, console.log(`Le serveur écoute sur le port ${port}`))
