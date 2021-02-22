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
        infos: datas.cv.informations,
        competences:datas.cv.competences,
        pages: "includes/competences.ejs"
    })
})

app.get("/experiences", (req, res, next) => {
    res.render("index.ejs", {
        infos: datas.cv.informations,
        experiences: datas.cv.experiences,
        pages: "includes/experiences.ejs"
    })
})

app.get("/etudes", (req, res, next) => {
    res.render("index.ejs", {
        infos: datas.cv.informations,
        etudes: datas.cv.etudes,
        pages: "includes/etudes.ejs"
    })
})

app.get("/contact", (req, res, next) => {
    res.render("index.ejs", {
        infos: datas.cv.informations,
        pages: "includes/contact.ejs"
    })
})

app.listen(port, console.log(`Le serveur écoute sur le port ${port}`))
