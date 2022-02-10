let x = 0;

function setup() {
  createCanvas(720, 400);
}

function draw() {
  background(220);

  push();
  translate(x, 0);
  avatar();
  x += 10;
  if (x > width) {
    x = -360;
  }
  pop();
}

function avatar() {
  //Legally Distinct 80's Hero Legs and Body
  fill('yellow');
  noStroke();
  //Legally Distinct 80's Hero Left Leg
  rect(340, 230, -10, 50);
  //Legally Distinct 80's Hero Right Leg
  rect(375, 230, -10, 50);
  fill('yellow');
  fill('white');
  fill('yellow');
  arc(width / 2, height / 2, 100, 100, 315, -25);
  //Legally Distinct 80's Hero Eye
  fill('red');
  arc(390, 190, 25, 25, PI, TWO_PI);
  //Legally Distinct 80's Hero Mustache
  fill('black');
  rect(390, 200, 20, 5);
}
