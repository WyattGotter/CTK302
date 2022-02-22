let state = 0
let timer = 0
let x = 0
let vel =0 ;

function setup() {
  createCanvas(800, 800);
  rectMode(CENTER);
}

function draw() {

  background('white');
  fill('black');
  rect(width / 2, height / 2, 200, 600);

  timer++;
  if (timer > 3 * 60) {
    timer = 0;
    state++;
    if (state > 2) {
      state = 0;
    }
  }

  // Car Code
  fill('blue');
  rect(x, height - 50, 100, 50);
  x = x + vel;
  if (x > width) {
    x = 0;
  }

  switch (state) {

    case 0: // Green light
      fill('grey');
      ellipse(width / 2, height / 2 - 170, 150, 150);
      fill('grey');
      ellipse(width / 2, height / 2, 150, 150);
      fill('green');
      ellipse(width / 2, height / 2 + 170, 150, 150);
      vel = 22;
      break;

    case 1: // Yellow light
      fill('grey');
      ellipse(width / 2, height / 2 - 170, 150, 150);
      fill('yellow');
      ellipse(width / 2, height / 2, 150, 150);
      fill('grey');
      ellipse(width / 2, height / 2 + 170, 150, 150);
      vel = 3;
      break;


    case 2: // Red light
      fill('red');
      ellipse(width / 2, height / 2 - 170, 150, 150);
      fill('grey');
      ellipse(width / 2, height / 2, 150, 150);
      fill('grey');
      ellipse(width / 2, height / 2 + 170, 150, 150);
      vel = 0;
      break;
  }
}
