let state = 0;
let timer = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {

  background(100);

  switch (state) {

    case 0:
      background("yellow") ;
      text("0", 100, 100);

      timer++;
      if (timer > 3*60) {
        timer = 0;
        state = 1;
      }
      break;

    case 1:
    background('red');
      text("1", 100, 100);
      timer++;
      if (timer > 2*60) {
        timer = 0;
        state = 2;
      }
      break;

    case 2:
    background('blue');
      text("2", 100, 100);
      timer++;
      if (timer > 1*60) {
        timer = 0;
        state = 3;
      }
      break;

  }
}

function mouseReleased() {
  state++;
  if (state > 2) state = 0;

}
