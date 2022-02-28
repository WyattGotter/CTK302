let state = 0;

function setup() {
  createCanvas(400, 400);
  textAlign(CENTER, CENTER);
  rectMode(CENTER);
  textSize(12);
  textFont('Georgia');
}

function draw() {

  switch (state) {

    case 0:
      background("yellow");
      fill('black');
      text("Why did the chicken cross the road?", 200, 100);
      break;

    case 1:
      background('black');
      fill('white');
      text("Don't expect a punchline, I'm serious. I asked you for a reason.", 200, 100);
      break;
  }
  push();
  fill('purple');
  rect(100, 200, 100, 100);
  fill('white');
  pop();
}

function mouseReleased() {
  if ((mouseX > 50) && (mouseX < 150) &&(mouseY > 150) && (mouseY < 250)) {
    state = (state + 1) % 2;
  }
}
