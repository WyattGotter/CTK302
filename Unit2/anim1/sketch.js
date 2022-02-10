let x = 0;
let
function setup() {
  font1 = loadFont("assets/sketchzone.otf");
  font2 = loadFont("assets/travelingtypewriter.ttf");
  createCanvas(500, 500);
  rectMode(CENTER);
}

function draw() {
  background('black');
  fill('white');
  textFont(font2);
  //textAlign(CENTER);
  textSize(30);
  text("Mmm apple juice", x, height/2);
  //rect(x, height/2, 10, 50);
  x+= 2;
  if (x > width) {
    x = 0;
  }

}
