const mysql = require("mysql2")
require("dotenv").config()

const pool = mysql.createPool({
	host: "localhost",
	user: "root",
	password: process.env.DB_PASSWORD,
	database: "book"
})

// Test the connection
pool.getConnection(function(err, connection){
	if(err){
		console.log("Error connecting to the database: " + err)
		return;
	}
	console.log("Connected to the MySQL database")
	connection.release()
})

module.exports = pool.promise()