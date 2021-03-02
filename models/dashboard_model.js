/**
 *  MODEL DASHBOARD
 **/

var connection = require("./../database/create_connexion")

exports.getAllCVModel = (user) => {
    return connection.then((conn) => {
        return conn.query("SELECT * FROM cv WHERE fk_user = ?",  [user])
    })
}
