const adminData = require("./admin")



const express = require("express")
const router = express.Router()
const bookController = require("../controllers/bookController.js")

router.get("/", bookController.getHomePage)

module.exports = router



