let numberOfTouches ;
let song1, song2, song3;

function preload() {
  song1 = loadSound('assets/s1.mp3');
  song2 = loadSound('assets/s2.mp3');
  song3 = loadSound('assets/s3.mp3');
}
function setup() {
  createCanvas(400, 400);
}

function draw() {
  clear();
  numberOfTouches = touches.length;
  text(numberOfTouches + ' touches', 5, 10);

  switch(numberOfTouches) {
    case 0:
      text("no one is touching the screen", 5, 22) ;
      fill('blue');
      break ;

      case 1:
       text("it's kind of lonely here", 5, 22) ;
       fill('red');
      // put a picture here

      break ;

      case 2:
      text("two fingers are touching the screen", 5, 22) ;
      fill('green');
            // put a picture here
      break ;

      case 3:
     text("three are touching the screen", 5, 22);
     fill('grey');
            // put a picture here
      break ;


  }

}
