
let ballin;
let bruh;
let thebible;

function setup() {
  createCanvas(400, 400);
  imageMode(CENTER);

  //how to do it: file name without extension, = loadImage(assets/filename.file extension)
    ballin = loadImage("assets/ballin.jpg");
    bruh = loadImage("assets/bruh.jpg");
    thebible = loadImage("assets/thebible.jpg");
}

  //The code is (x, y, width, height)
function draw() {
  background(100);
  image(ballin, width/2, 100, 100, 100);
  image(bruh, width/2, 200, 100, 100);
  image(thebible, width/2, 300, 100, 100)
}
