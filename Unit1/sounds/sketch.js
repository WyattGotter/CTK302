let song1;

function preload() {
  song1 = loadSound("assets/beachbottoms.mp3")
}


function setup() {
  createCanvas(500, 500);
    song1.loop();
    s.pause();
}

function draw() {
  background(100);
}

function touchStarted(){
  getAudioContext().resume();
}
