let numberOfTouches;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  clear();
  numberOfTouches = touches.length;
  text(numberOfTouches + ' touches', 5, 10);

  switch (numberOfTouches) {
    case 0:
      fill('black');
      text("no one is touching the screen", 5, 22);
      fill('blue');
      break;

    case 1:
      fill('black');
      text("it's kind of lonely here", 5, 22);
      fill('red');
      // put a picture here

      break;

    case 2:
      fill('black');
      text("two fingers are touching the screen", 5, 22);
      fill('green');
      // put a picture here
      break;

    case 3:
      fill('black');
      text("three are touching the screen", 5, 22);
      fill('grey')
      // put a picture here
      break;

  }

}
