let state = 0;

function setup() {
  createCanvas(400, 400);
  textAlign(CENTER);
  rectMode(CENTER);
  textSize(13);
  textFont('Georgia');
}

function draw() {
  switch (state) {

    case 0:
      background("yellow") ;
      text("Why did the chicken cross the road?", 200, 100);
      text("first line\nsecond line", 100, 300) ;
      break;

    case 1:
    background('red');
      text("Don't expect a punchline, I'm serious. I asked you for a reason.", 200, 100);
      break;
  }
}

function mouseReleased() {
  state = (state + 1) % 2;
//  state++;
//if (state > 2) state = 0;

}
