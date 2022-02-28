let state = 0;
let timer = 0;
function setup() {
  createCanvas(400, 400);
  textAlign(CENTER);
  rectMode(CENTER);
  textSize(13);
  textFont('Georgia');
}

function draw() {

timer++;
if (timer > 3*60){
  timer = 0;
  state = (state + 1) % 2;
}
  switch (state) {

    case 0:
      background("yellow") ;
      text("Why did the chicken cross the road?", 200, 100);
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
