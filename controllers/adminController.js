const Book = require("../models/Book")

exports.getAddBook= function(req, res){
	res.render("admin/add-book.ejs", {book: undefined, pageTitle: "Add book"})
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

exports.getBooks = function(req, res){
	Book.fetchAll().then(function(books){
		res.render("admin/add-book.ejs", {books: books[0], pageTitle: "All books"})
	}).catch(function(err){
		res.send("Error occured: " + err)
	})
}

exports.getEditBook = function(req, res){
	const bookId = req.params.id
	console.log(bookId)
	Book.fetchById(bookId).then(function(book){
		console.log(book)
		res.render("admin/edit-book.ejs", {book: book[0][0], pageTitle: `Edit ${book.title}`})
	}).catch(function(err){
		console.log(err)
	})
}

exports.postEditBook = function(req, res){

	const {id, title, author} = req.body	
	let book = new Book(id, title, author)

	book.save().then(function(data){	
		console.log(data)
		res.redirect("/")
	}).catch(function(err){
		console.log(err)
	})
}

exports.deleteBook = function(req, res){
	const bookId = req.body.id
	Book.deleteBook(bookId).then(function(data){
		console.log(data)
		res.redirect("/")
	}).catch(function(err){
		console.log(err)
	})
}