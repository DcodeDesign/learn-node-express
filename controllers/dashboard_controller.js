/**
 *  CONTROLLER DASHBOARD
 **/

var dashboardModel = require("./../models/dashboard_model")

/** GET */
exports.getAllCV = (req, res) => {
    let user = req.session.userID
    if (user !== undefined) {
        dashboardModel.getAllCVModel(user).then((cv) => {
            res.render("index.ejs", {
                page : "./pages/dashboard/dashboard.ejs",
                user: user,
                cv : cv
            })
        }).catch((error) => (console.log(error)))
    } else {
        res.redirect('/')
    }
}

/*
app.get("/dashboard", (req, res, next) => {
    if (sess !== undefined) {
        conn.query("SELECT * FROM cv WHERE fk_user = ?",  [sess.userID]).then((cv) => {
            res.render("index.ejs", {
                pages: "dashboard/dashboard.ejs",
                user: sess.userID,
                cv : cv
            })
        })
    } else {
        res.redirect("/")
    }
})
*/
