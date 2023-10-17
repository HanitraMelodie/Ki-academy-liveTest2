const Book = require("../models/Book")

exports.getHomePage = function(req, res){
	res.render("admin/book.ejs", {pageTitle: "Best online store!"})
}






