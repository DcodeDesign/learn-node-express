/**
 *  MODEL LOGIN
 **/

var connection = require("../database/create_connexion")

exports.loginModel = () => {
    return connection.then((conn) => {
        return conn.query("")
    })
}
