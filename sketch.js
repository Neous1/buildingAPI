function setup() {
  // put setup code here
  createCanvas (400, 400);
  background(51, [a])
  loadJSON("all", gotData);
  console.log("running");
}

function gotData(data) {
  console.log(data);
  var keys = Object.keys(data);
  for(var i = 0; i< keys.length; i++){
    var word = key[i];
    var score = data[word];
    var x = random(width);
    var y = random(height);
    fill(255);
    textSize(64)
  }

}