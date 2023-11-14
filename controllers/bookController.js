const Book = require("../models/Book")

exports.getHomePage = function(req, res){
	res.render("admin/book.ejs", {books:[],pageTitle: "Best online store!"})
}

exports.postAddBook = function(req, res){
	const book = new Book(null, req.body.title, req.body.author)
	book.save().then(function(data){
		console.log(data)
	}).catch(function(err){
		console.log(err)
	})
	res.redirect("/")
}







