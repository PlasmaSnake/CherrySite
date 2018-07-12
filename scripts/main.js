var express = require("express");
var app = express();
var port = 3000;
var path = require('path');

app.use("/", (req, res) =>{
	res.sendFile(path.resolve(__dirname + "/../index.html"));
});

app.listen(port, () => {
	console.log ("Server listening on port " + port);
});