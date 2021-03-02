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
        return  conn.query("SELECT * FROM experiences WHERE fk_user = ?", [user, lastInsert])
    })
}

exports.getEtudesModel = (user, lastInsert) => {
    return connection.then((conn) => {
        return conn.query("SELECT * FROM etudes WHERE fk_user = ?",  [user, lastInsert])
    })
}

exports.getCategoriesModel = (user, lastInsert) => {
    return connection.then((conn) => {
        return  conn.query("SELECT * FROM categories WHERE fk_user = ?",  [user, lastInsert])
    })
}

