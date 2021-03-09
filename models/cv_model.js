/**
 *  MODEL CV
 **/
var random_name = require('node-random-name');

var connection = require("./../database/create_connexion")

/** CREATE */
exports.createCVModel = (user) => {
    return connection.then((conn) => {
        return conn.query("INSERT INTO cv SET ?", {
            fk_user: user,
            titre: random_name()
        })
    })
}

/** DELETE */
exports.deleteCVModel = (cvID) => {
    return connection.then((conn) => {
        return conn.query("DELETE FROM cv WHERE id = ?", [cvID])
    })
}

/** GET */
exports.getCompetencesModel = (user, lastInsert) => {
    return connection.then((conn) => {
        return conn.query("SELECT * FROM competences WHERE fk_user = ? AND fk_cv = ?",  [user, lastInsert])
    })
}

exports.getExperiencesModel = (user, lastInsert) => {
    return connection.then((conn) => {
        return  conn.query("SELECT * FROM experiences WHERE fk_user = ? AND fk_cv = ?", [user, lastInsert])
    })
}

exports.getEtudesModel = (user, lastInsert) => {
    return connection.then((conn) => {
        return conn.query("SELECT * FROM etudes WHERE fk_user = ? AND fk_cv = ?",  [user, lastInsert])
    })
}

exports.getCategoriesModel = (user, lastInsert) => {
    return connection.then((conn) => {
        return  conn.query("SELECT * FROM categories WHERE fk_user = ?",  [user, lastInsert])
    })
}

exports.getInfosUserModel = (user) => {
    return connection.then((conn) => {
        return  conn.query("SELECT * FROM users WHERE id = ?",user)
    })
}

exports.getCVModel = (user, lastInsert) => {
    return connection.then((conn) => {
        return conn.query("SELECT * FROM cv WHERE id = ? AND fk_user = ?",[lastInsert, user])
    })
}

/** POST */
exports.postCompetences = (req, id) => {
    return connection.then((conn) => {
        return conn.query("INSERT INTO competences SET ?", {
            fk_user: req.session.userID,
            fk_cv: req.params.id,
            titre: req.body.titreCompetences,
            niveau: req.body.niveauCompetences,
            fk_categories: req.body.categorieCompetence
        })
    })
}

exports.postExperiences = (req, id) => {
    return connection.then((conn) => {
        return conn.query("INSERT INTO experiences SET ?", {
            fk_user: req.session.userID,
            fk_cv: req.params.id,
            poste: req.body.posteExperiences,
            societe: req.body.societeExperiences,
            ville: req.body.villeExperiences,
            date_dbt: req.body.dbtExperiences,
            date_fin: req.body.finExperiences
        })
    })
}

exports.postEtudes = (req, id) => {
    return connection.then((conn) => {
        return conn.query("INSERT INTO etudes SET ?", {
            fk_user: req.session.userID,
            fk_cv: req.params.id,
            formation: req.body.formationEtudes,
            institution: req.body.institutionEtudes,
            ville: req.body.villeEtudes,
            date_dbt: req.body.dbtEtudes,
            date_fin: req.body.finEtudes
        })
    })
}


