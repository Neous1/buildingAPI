var words = {
    "rainbow": 5,
    "unicorn": 3,
    "doom": -3,
    "gloom": -2
}
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

app.get('/add/:word/:score?', addWord);// "colon" indicates that "add" is the route and what follows is given by the user


function addWord(request, response){
    var data = request.params;
    var word = data.word;
    var score = Number(data.score);
    var reply;
    if (!score){
         reply={
            msg: "Score is required."
        }
    }else{

    words[word]=score;

         reply = {
        msg: "Thank you for your word."
    }
    }


    response.send(reply)
}

 app.get("/all", sendall);
 function sendall(request, response){
     response.send(words)
 }