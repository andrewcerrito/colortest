var video;

// dimensions for detection square
var sq1Width = 20;
var sq1Height = 20;
var sq1X;
var sq1Y;

// dimensions for display square
var sq2Width = 200;
var sq2Height = 200;
var sq2X;
var sq2Y;


var dist = 10;

var redTotal, greenTotal, blueTotal;

function setup() {
  createCanvas(displayWidth, displayHeight);
  background(0);
  video = createCapture(VIDEO);  
  video.hide();

  sq1X = width/2;
  sq1Y = height/2;

  sq2X = width/2 + sq1Width + 50;
  sq2Y = height/2;
}



function draw() {  


  image(video, 0, 0, displayWidth, displayHeight);
  //loadPixels();
  redTotal = blueTotal = greenTotal = 0;

  for (var i = sq1X; i <= sq1X + sq1Width; i++) {
    for (var j = sq1Y; j <= sq1Y + sq1Height; j++) {
      let c = get(i, j);
      redTotal += red(c);
      greenTotal += green(c);
      blueTotal += blue(c);
    }
  }

  var sqPixels = sq1Width*sq1Height;

  var avgRed = redTotal/sqPixels;
  var avgGreen = greenTotal/sqPixels;
  var avgBlue = blueTotal/sqPixels;
  let avgColor = color(avgRed, avgGreen, avgBlue);

  stroke(255);
  strokeWeight(3);
  noFill();
  rect(sq1X, sq1Y, sq1Width, sq1Height);

  fill(avgColor);
  rect(sq2X, sq2Y, sq2Width, sq2Height);

  textSize(36);
  var s = avgRed + ", " + avgGreen + ", " + avgBlue;
  text(s, 50, 50);

  //updatePixels();
}

function keyPressed() {
  
  if (key === ',') {
    if (sq1Width > dist) {
      sq1Width -= dist;
      sq1Height -= dist;
      console.log("HI!!!!");
    }
  }
  
  if (key === '.') {
    sq1Width += dist;
    sq1Height += dist;
  }
/*
  switch(keyCode) {
  case UP_ARROW:
    sq1Y -= dist;
    break;

  case LEFT_ARROW:
    sq1X -= dist;
    break;

  case RIGHT_ARROW:
    sq1X += dist;
    break;

  case DOWN_ARROW:
    sq1Y += dist;
    break;
  }

  switch(key) {
  case ',':
    if (sq1Width > dist) {
      sq1Width -= dist;
      sq1Height -= dist;
    }
    break;

  case '.':
    sq1Width += dist;
    sq1Height += dist;
    break;
  }
  */
  return false;
  
}