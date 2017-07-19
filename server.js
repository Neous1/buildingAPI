console.log("server is starting");

var express = require("express");

var app= express();

var server = app.listen(3000, listening);

function listening(){
    console.log("listening...");
}
//middleware to connect client folder to server
app.use(express.static("website"));

// interaction
//Get request

app.get('/flower', sendFlower);

function sendFlower(request, response){
    response.send("I love flowers too");
}