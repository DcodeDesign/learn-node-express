/**
 *  MODEL LOGIN
 **/
const connection = require("../database/create_connexion")

exports.connexion = (email) => {
   return  connection.then(
        (conn) => {
            return conn.query("SELECT * FROM users WHERE email = ?", [email])
        }
    )
}
