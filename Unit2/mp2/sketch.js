let state = 0


function preload() {
  song1 = loadSound('assets/s1.mp3');
  song2 = loadSound('assets/s2.mp3');
  song3 = loadSound('assets/s3.mp3');
  song4 = loadSound('assets/s4.mp3');
  song5 = loadSound('assets/s5.mp3');
}

function setup() {
  createCanvas(700, 700);
}

function draw() {

  switch (state) {
    case 0:
      song1.play();
      state = 1;
      break;

      case 1:
      background('red');
      text('listening to song 1', 100, 100);
      break;

    case 2:
      song2.play();
      state = 3;
      break;

    case 3:
      background('blue');
      break;

    case 4:
      song3.play();
      state = 5;
      break;

        case 5:
        background('red');
        text('listening to song 1', 100, 100);
        break;

        case 6:
          song4.play();
          state = 7;
          break;

      case 7:
        background('blue');
        break;

      case 4:
        song5.play();
        state = 5;
        break;
  }
}

function mouseReleased() {
  state = (state + 1) % 6;
  song1.pause();
  song2.pause();
  song3.pause();
  song4.pause();
  song5.pause();
}
