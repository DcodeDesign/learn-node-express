/**
 *  CONTROLLER LOGIN
 **/

const loginModel = require("./../models/login_model")
const bcrypt = require("bcrypt");

/** GET */
exports.login = (req, res) => {
    if (req.session.userID === undefined) {
        res.render("index.ejs", {
            page : "pages/connexion/login.ejs",
            user : false
        })
    } else {
        res.redirect("/dashboard")
    }
}

/** POST */
exports.connexion = (req, res) => {
    if (req.session.userID === undefined) {
        let email = req.body.email.trim()
        loginModel.connexion(email).then((user) => {
            if (typeof user !== 'undefined' && user.length > 0) {
                let pwd = bcrypt.compareSync(req.body.password, user[0].password);
                if(pwd) {
                    req.session.userID = user[0].id
                    res.redirect('/dashboard')
                }else {
                    res.redirect('/')
                }
            } else {
                res.redirect('/')
            }
        }).catch((error) => (console.log(error)))
    } else {
        res.redirect('/')
    }
}
