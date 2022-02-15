let state = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {

  background(100);

  switch (state) {

    case 0:
      background("red");
      text("0", 100, 100);
      for (let j = 0; j < 20; j++) {
        for (let i = 0; i < 20; i++) {
          fill('yellow');
          rect(i * 20, j * 20, 12, 12);
        }
      }
      break;

    case 1:
      background("yellow");
      text("1", 100, 100);
      for (let j = 0; j < 20; j++) {
        for (let i = 0; i < 20; i++) {
          fill('red');
          rect(i * 20, j * 20, 12, 12);
        }
      }
      break;

    case 2:
    background('green');
    text("2", 100, 100);
    for (let j = 0; j < 20; j++) {
      for (let i = 0; i < 20; i++) {
        fill('blue');
        rect(i * 20, j * 20, 12, 12);
      }
    }
      break;

      case 3:
      background('blue');
      text("3", 100, 100);
      for (let j = 0; j < 20; j++) {
        for (let i = 0; i < 20; i++) {
          fill('green');
          rect(i * 20, j * 20, 12, 12);
        }
      }
        break;
}
}

function mouseReleased() {
  state++;
  if (state > 4) state = 0;

}
