function setup() {
  createCanvas(800, 400);
  font1 = loadFont("assets/sketchzone.otf");
  font2 = loadFont("assets/travelingtypewriter.ttf");
textAlign(CENTER);
}

function draw() {
  background('blue');
  textSize(30);
  textFont(font1);
  text("The best things in life are free.", width/2, 100);
  textSize(30);
  textFont(font2);
  text("(Except Pizza Rolls)", width/2, 200);
}
