const express = require("express")
const app = express()
const bodyParser = require('body-parser')
const session = require('express-session')
const dotenv = require("dotenv")
dotenv.config()
const cors = require("cors")

const local = (typeof process.env.o2switch == "undefined")

const corsOptions = { origin: `http://localhost:*` }
app.use(cors(corsOptions))

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


if(!local)
    app.listen()
else
    app.listen(process.env.LISTEN_PORT, () => { console.log(`Le serveur écoute sur le local sur le port ${process.env.LISTEN_PORT}`)})


