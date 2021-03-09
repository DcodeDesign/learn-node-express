/**
 *  CONTROLLER CV
 */

var cvModel = require("./../models/cv_model")

/** CREATE */
exports.createCV = (req, res) => {
    let user = req.session.userID
    if (user !== undefined) {
        cvModel.createCVModel(user).then((cv) => {
            res.redirect('/new-cv/' + cv.insertId)
        }).catch((error) => (console.log(error)))
    } else {
        res.redirect('/')
    }
}

/** DELETE */
exports.deleteCV = (req, res) => {
    let user = req.session.userID
    if (user !== undefined) {
        cvModel.deleteCVModel(req.params.id).then(() => {
            res.redirect('/dashboard')
        }).catch((error) => (console.log(error)))
    } else {
        res.redirect('/')
    }
}

/** GET */
exports.getCompetences = (req, res, next) => {
    let user = req.session.userID
    if (user !== undefined) {
        cvModel.getCompetencesModel(req.session.userID, req.param.id).then((datas) => {
            res.locals.competences = datas;
            next()
        })
    } else {
        res.redirect('/')
    }
}

exports.getExperiences = (req, res, next) => {
    let user = req.session.userID
    if (user !== undefined) {
        cvModel.getExperiencesModel(req.session.userID, req.params.id).then((datas) => {
            res.locals.experiences = datas;
            next()
        })
    } else {
        res.redirect('/')
    }
}

exports.getEtudes = (req, res, next) => {
    let user = req.session.userID
    if (user !== undefined) {
        cvModel.getEtudesModel(req.session.userID, req.params.id).then((datas) => {
            res.locals.etudes = datas;
            next()
        })
    } else {
        res.redirect('/')
    }
}

exports.getCategories = (req, res, next) => {
    let user = req.session.userID
    if (user !== undefined) {
        cvModel.getCategoriesModel(req.session.userID, req.params.id).then((datas) => {
            res.locals.categories = datas;
            next()
        })
    } else {
        res.redirect('/')
    }
}

exports.getInfosUser = (req, res, next) => {
    let user = req.session.userID
    if (user !== undefined) {
        cvModel.getInfosUserModel(req.session.userID).then((datas) => {
            res.locals.infosUser = datas;
            next()
        })
    } else {
        res.redirect('/')
    }
}

exports.getCV = (req, res, next) => {
    let user = req.session.userID
    if (user !== undefined) {
        cvModel.getCVModel(req.session.userID, req.params.id).then((datas) => {
            res.locals.cv = datas;
            next()
        })
    } else {
        res.redirect('/')
    }
}


exports.getAll = (req, res) => {
    let locals = res.locals
    let user = req.session.userID
    if (user !== undefined) {
        res.render("index.ejs", {
            page: "pages/cv/create.ejs",
            cvID: req.params.id,
            user: req.session.userID,
            cv: locals.cv,
            categories: locals.categories,
            competences: locals.competences,
            experiences: locals.experiences,
            etudes: locals.etudes,
            infos: locals.infosUser
        })
    } else {
        res.redirect('/')
    }
}

exports.postCV = (req, res, next) => {
    let user = req.session.userID
    if (user !== undefined) {
        switch (req.body.sendForm) {
            case 'formCompetences':
                cvModel.postCompetences(req).then(() => {
                    res.redirect(`/new-cv/${req.params.id}`)
                })
                break;

            case 'formExperiences':
                cvModel.postExperiences(req).then(() => {
                    res.redirect(`/new-cv/${req.params.id}`)
                })
                break;

            case 'formEtudes':
                cvModel.postEtudes(req).then(() => {
                    res.redirect(`/new-cv/${req.params.id}`)
                })
                break;

            default:
                res.redirect('/dashboard')
        }
    } else {
        res.redirect('/')
    }
}

/*

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

app.post("/cv", (req, res, next) => {
    switch (req.body.sendForm) {
        case 'formCompetences':
            conn.query("INSERT INTO competences SET ?", {
                fk_user: sess.userID,
                titre: req.body.titreCompetences,
                niveau: req.body.niveauCompetences,
                fk_categories: req.body.categorieCompetence
            }, (error, results, fields) => {
                if (error)
                    res.redirect('/cv')
                res.redirect("/cv")
            })
            break;

        case 'formExperiences':
            conn.query("INSERT INTO experiences SET ?", {
                fk_user: sess.userID,
                poste: req.body.posteExperiences,
                societe: req.body.societeExperiences,
                ville: req.body.villeExperiences,
                date_dbt: req.body.dbtExperiences,
                date_fin: req.body.finExperiences
            }, (error, results, fields) => {
                if (error)
                    res.redirect('/new-cv')
                res.redirect("/new-cv")
            })
            break;

        case 'formEtudes':
            conn.query("INSERT INTO etudes SET ?", {
                fk_user: sess.userID,
                formation: req.body.formationEtudes,
                institution: req.body.institutionEtudes,
                ville: req.body.villeEtudes,
                date_dbt: req.body.dbtEtudes,
                date_fin: req.body.finEtudes
            }, (error, results, fields) => {
                if (error)
                    res.redirect('/new-cv')
                res.redirect("/new-cv")
            })
            break;

        default:
    }
})
*/
