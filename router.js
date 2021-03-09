const express = require("express")
const router = express.Router()

const local = (typeof process.env.o2switch == "undefined")

let prefixForO2Switch  = ""
if(!local) {
    prefixForO2Switch = process.env.prefixUrl
}


let commonController = require("./controllers/common_controller")
let loginController = require("./controllers/login_controller")
let dashboardController = require("./controllers/dashboard_controller")
let logoutController = require("./controllers/logout.controller")
let CVController = require("./controllers/cv_controller")
let subscribeController =  require("./controllers/subscribe_controller")

router.get(prefixForO2Switch + "/", loginController.login)
router.post(prefixForO2Switch + "/", loginController.connexion)

router.get(prefixForO2Switch + "/subscribe", subscribeController.subscribe)
router.post(prefixForO2Switch + "/subscribe", subscribeController.register)

router.get(prefixForO2Switch + "/logout", logoutController.logout)

router.get(prefixForO2Switch + "/dashboard", dashboardController.getAllCV)

router.get(prefixForO2Switch + "/new-cv", CVController.createCV)
router.get(prefixForO2Switch + "/new-cv/:id", [
    CVController.getCompetences,
    CVController.getExperiences,
    CVController.getEtudes,
    CVController.getCategories,
    CVController.getInfosUser,
    CVController.getCV,
    CVController.getAll])
router.post(prefixForO2Switch + "/new-cv/:id", [
    CVController.postCV])
router.get(prefixForO2Switch + "/delete-cv/:id", CVController.deleteCV)

router.get(prefixForO2Switch + "*", commonController.notFound)

module.exports = router
