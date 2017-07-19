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

app.get('/search/:flower/:num', sendFlower);// "colon" indicates that "search" is the route and what follows is given by the user


function sendFlower(request, response){
    var data = request.params;
    var num = data.num;
    var reply = "";
    for (var i = 0; i< num ; i++){
        reply += "I love " + data.flower + " too ";
    }
    response.send(reply); // flower is what the user entered to search per the app get param
}