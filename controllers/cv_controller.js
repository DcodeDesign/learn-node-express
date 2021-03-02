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
exports.getCompetences =(req, res, next) => {
    cvModel.getCompetencesModel(req.session.userID, req.param.id).then((datas) => {
        res.locals.competences = datas;
        next()
    })
}

exports.getExperiences =(req, res, next) => {
    cvModel.getExperiencesModel(req.session.userID, req.param.id).then((datas) => {
        res.locals.experiences = datas;
        next()
    })
}

exports.getEtudes =(req, res, next) => {
    cvModel.getEtudesModel(req.session.userID, req.param.id).then((datas) => {
        res.locals.etudes = datas;
        next()
    })
}

exports.getCategories =(req, res, next) => {
    cvModel.getCategoriesModel(req.session.userID, req.param.id).then((datas) => {
        res.locals.categories = datas;
        next()
    })
}

exports.getAll=(req, res) => {
    let locals = res.locals
    res.render("index.ejs", {
        page : "pages/cv/create.ejs",
        cvID : req.param.id,
        user: req.session.userID,
        categories: locals.categories,
        competences: locals.competences,
        experiences: locals.experiences,
        etudes: locals.etudes
    })
}

/*
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
