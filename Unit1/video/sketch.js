let playing = false;
let spoon;
let button;

function setup() {
  // specify multiple formats for different browsers\
  createCanvas(1200, 900);
  spoon = createVideo(['assets/spoon.mp4', vidLoad]);
  button = createButton('play');
  button.mousePressed(toggleVid);
  spoon.hide();
  // attach button listener
}

// plays or pauses the video depending on current state
function toggleVid() {
  if (playing) {
    spoon.pause();
    button.html('play');
  } else {
    spoon.loop();
    button.html('pause');
  }
  playing = !playing;
}
function draw(){
  image(spoon, 0, 0, 1200, 900);
  fill(random(255), random(255), random(255));
textSize(random(150));
text("Spoon", mouseX, mouseY);
}
function vidLoad(){
  spoon.loop();
  spoon.volume(0);
}
