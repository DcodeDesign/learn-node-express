/**
 *  CONTROLLER LOGOUT
 **/

/** GET */
exports.logout = (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.log(err);
        } else {
            req.session = undefined
            res.redirect("/")
        }
    });
}
