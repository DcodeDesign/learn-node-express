const express = require("express")
const app = express()
const port = 3000
const bodyParse = require("body-parser")

const datas = require("./datas/datas")

app.use(bodyParse.json())
app.use(bodyParse.urlencoded({ extended : true }))

app.use(express.static("./assets"))
app.engine('html', require('ejs').renderFile)

app.get("/", (req, res, next) => {
    res.render("index.ejs", {
        infos: datas.cv
    })
})

app.listen(port, console.log(`Le serveur écoute sur le port ${port}`))
