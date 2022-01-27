let song1;

function preload() {
  song1 = loadSound("assets/beachbottoms.mp3")
}


function setup() {
  createCanvas(500, 500);
    song1.loop();
    
}

function draw() {

  background(100);
if (mouseIsPressed)
  background('red');

}
function touchStarted(){
  getAudioContext().resume();
}
