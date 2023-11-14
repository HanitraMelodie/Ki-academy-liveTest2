const express = require("express")
const path = require("path")
const rootDir = require("../util/path")
const currentDate = require("../util/date")
const adminController = require("../controllers/adminController")

const router = express.Router()

router.get("/", adminController.getBooks)

router.get("/add-book",adminController.getAddBook)

router.post("/add-book", adminController.postAddBook)

router.get("/", adminController.getBooks)

router.get("/edit-book/:id", adminController.getEditBook)

router.post("/edit-book", adminController.postEditBook)

router.post("/delete-book", adminController.deleteBook)

module.exports = router

