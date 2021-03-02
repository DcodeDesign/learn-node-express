/**
 *  CONTROLLER COMMON
 **/
var commonModel = require("./../models/common_model")

exports.notFound = (req, res) => {
    res.render("index.ejs", { page : '404.ejs'})
}
