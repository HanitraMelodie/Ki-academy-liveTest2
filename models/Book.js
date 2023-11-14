const db = require("../util/database")

module.exports = class Book{
	constructor(id,title, author){
		this.id = id
		this.title = title
		this.author = author
	}

	save(){
		if(this.id){
			// Update an existing book
			return db.execute('UPDATE books SET title = ?, author = ? WHERE id = ?', [this.title, this.author, this.id])

		}
		else{
			// Insert a new book
			return db.execute('INSERT INTO books (title, author) VALUES (?, ?)', [this.title, this.author])
		}
	}

	static fetchAll(){		
		return db.execute('SELECT * FROM books')
	}

	static fetchById(bookId){
		return db.execute('SELECT * FROM books WHERE id = ?', [bookId])
	}

	static deleteBook(id){
		return db.execute('DELETE FROM books WHERE id = ?', [id])
	}
}

