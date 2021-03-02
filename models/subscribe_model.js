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
    console.log(post)
    return connection.then((conn) => {
        return conn.query("INSERT INTO users SET ? ", {
            email: post.email,
            password: post.password,
            prenom: post.prenom,
            nom: post.nom,
            rue: post.rue,
            region: post.region,
            tel: post.tel
        })
    })
}

