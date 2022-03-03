let state = 0
let timer = 0

function preload() {
  song1 = loadSound('assets/s1.mp3');
  song2 = loadSound('assets/s2.mp3');
  song3 = loadSound('assets/s3.mp3');
  p1 = loadImage("assets/picture1.png");
  p2 = loadImage("assets/picture2.png");
  p3 = loadImage("assets/picture3.png");
}

function setup() {
  createCanvas(500, 500);
//rectMode(CENTER);
}

function draw() {

  switch (state) {
    case 0:
      song1.play();
      state = 1;
      break;

    case 1:
    image(p1, 0, 0, 500);
    //image(ballin, width/2, 100, 100, 100);
      //background('red');

      break;

    case 2:
      song2.play();
      state = 3;
      break;

    case 3:
      image(p2, 0, 0, 500);
      break;

    case 4:
      song3.play();
      state = 5;
      break;

    case 5:
      image(p3, 0, 0, 500);
      timer++;
      if (timer > 10*60) {
        timer = 0;
      state = 0; }
      break;
  }
}

function mouseReleased() {
  state = (state + 1) % 6;
  song1.pause();
  song2.pause();
  song3.pause();

}
