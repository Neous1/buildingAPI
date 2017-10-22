function setup() {
  // put setup code here
  createCanvas (300, 300);
  drawData();
  console.log("running");
  var button = select ("#submit");
  button.mousePressed(submitWord);

}

function drawData(){
  loadJSON("all", gotData);
  
}

function submitWord(){
  var word = select("#word").value();
  var score = select("#score").value();
  console.log(word, score);
  //create route in code tocapture user's input
  loadJSON("add/" +word+"/"+score, finished);
  function finished(data){
    console.log(data);
    drawData();
  }

}

function gotData(data) { 
  background(51);
  console.log(data);
  var keys = Object.keys(data);
  for(var i = 0; i< keys.length; i++){
    var word = keys[i];
    var score = data[word];
    var x = random(width);
    var y = random(height);
    fill(255);
    textSize(18)
    text(word, x, y);
  }

}