/**
*  CONTROLLER SUBSCRIBE
**/
const bcrypt = require('bcrypt');
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);

const subscribeController = require("./../models/subscribe_model")

/** GET */
exports.subscribe = (req, res) => {
    if (req.session.userID === undefined) {
        res.render("index.ejs", {
            page : "pages/connexion/subscribe.ejs",
            user: false
        })
    } else {
        res.redirect("/dashboard")
    }
}

exports.register = (req, res) => {
    if (req.session.userID === undefined) {
        const email = req.body.email.trim()
        const password = bcrypt.hashSync(req.body.password.trim(), salt);
        const prenom = req.body.prenom.trim()
        const nom = req.body.nom.trim()
        const rue = req.body.adresse.trim()
        const region = req.body.region.trim()
        const tel = req.body.tel.trim()

        subscribeController.postSubscribeModel({
            email, password, prenom, nom, rue, region, tel
        }).then((user) => {
            if (typeof user !== 'undefined' && user.length > 0) {
                res.redirect('/subscribe')
            } else {
                res.redirect('/')
            }
        }).catch((error) => (console.log(error)))
    } else {
        res.redirect('/')
    }
}
