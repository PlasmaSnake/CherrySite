const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require('path');
const app = express();
var port = 3000;
const pug = require ("pug");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

mongoose.Promise =
global.Promise;
mongoose.connect("mongodb://localhost:27017/cherrysite", {useNewUrlParser: true});
mongoose.connection.on('error', (err) => {
	console.error(`MongoDB connection error: ${err}`);
	process.exit(1);
  });

var emailSchema = new mongoose.Schema({
	email: String
});	
var userEmail = mongoose.model("User E-mail", emailSchema)

app.get("/", (req,res) => {
	res.sendFile(path.resolve(__dirname+"/../index.html"))
	});

app.post("/subscribeEmail", (req, res)=> {
	var emailData = new userEmail(req.body);
	emailData.save()
		.then(item => {
			res.send("item saved to database");
		})
		.catch(err => {
			res.status(400).send("unable to save to database");
		});
});


app.listen(port, () => {
	console.log ("Server listening on port " + port);
});

// TODO Implement change website and image updating
// TODO Pulling Data from DB

