const express = require("express")
const app = express()
const bodyParser = require('body-parser')
const session = require('express-session')
const port = 3000

app.use(bodyParser.json()) // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })) // support encoded bodies for form http post

app.use(express.static("./assets"))
app.engine('html', require('ejs').renderFile)

app.use(session({
    secret: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
    cookie: {maxAge: (3600 * 100)} // 1h
}))


// routage express
var router = require("./router")
app.use("/", router)


app.listen(port, console.log(`Les serveur Express écoute sur le port ${port}`))
