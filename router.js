const express = require("express")
const router = express.Router()

let commonController = require("./controllers/common_controller")
let loginController = require("./controllers/login_controller")
let dashboardController = require("./controllers/dashboard_controller")
let logoutController = require("./controllers/logout.controller")
let CVController = require("./controllers/cv_controller")
let subscribeController =  require("./controllers/subscribe_controller")

router.get("/", loginController.login)
router.post("/", loginController.connexion)
router.get("/subscribe", subscribeController.subscribe)
router.get("/logout", logoutController.logout)
router.get("/dashboard", dashboardController.getAllCV)
router.get("/new-cv", CVController.createCV)
router.get("/new-cv/:id", [
    CVController.getCompetences,
    CVController.getExperiences,
    CVController.getEtudes,
    CVController.getCategories,
    CVController.getAll
])
router.get("/delete-cv/:id", CVController.deleteCV)
router.get("*", commonController.notFound)

module.exports = router
