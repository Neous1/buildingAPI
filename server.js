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

app.get('/search/:flower', sendFlower);// "colon" indicates that "search" is the route and what follows is given by the user


function sendFlower(request, response){
    var data = request.params;
    response.send("I love " + data.flower + " too");
}