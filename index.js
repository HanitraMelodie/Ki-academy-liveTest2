

const express=require("express")
const server=express()
const path = require("path")
const ejs=require("ejs")

const adminData = require("./routes/admin") 
const bookRoutes = require("./routes/book")
const errorController = require("./controllers/errorController")

server.use(express.urlencoded({extended: false}))

server.set("view engine",ejs)
server.set("views","views")
server.use(express.static(path.join(__dirname, 'public')))

// server.use((req, res, next) => {
// 	console.log("This is another middleware!")
// 	next()
// })

// server.use("/admin", adminData)

const checkIfAdmin=(req,res,next)=>{
	if (req.query.admin==="true"){
		req.isAdmin=true
	}
	else{
		req.isAdmin=false
	}
	next()
}

server.use(bookRoutes)
server.use("/admin", checkIfAdmin)
server.use("/admin", adminData.route)



// server.use((req, res, next)=>{
// 	res.status(404).send("There's an error!")
// })

// server.get("/",function(req,res){
//     res.send('Hello world')
// })

server.use(errorController.getError)

const port = 5001

server.listen(port, function(){
	console.log(`Server running at port ${port}`)
})

