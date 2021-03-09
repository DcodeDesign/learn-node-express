/**
 *  MODEL SUBSCRIBE
 **/

/** GET */
var connection = require("../database/create_connexion")

exports.getSubscribeModel = () => {
    return connection.then((conn) => {
        return conn.query("")
    })
}

/** POST */
exports.postSubscribeModel = (...post) => {
    return connection.then((conn) => {
        return conn.query("INSERT INTO users SET ? ", {
            email: post[0].email,
            password: post[0].password,
            prenom: post[0].prenom,
            nom: post[0].nom,
            rue: post[0].rue,
            region: post[0].region,
            tel: post[0].tel
        })
    })
}

