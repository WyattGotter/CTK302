let ballin;
let bruh;
let thebible;

function setup() {
  createCanvas(400, 400);
  //how to do it: file name without
    ballin = loadImage("assets/ballin.jpg");
    bruh = loadImage("assets/thebible.jpg");
    thebible = loadImage("bruh.jpg")

}

  //The code is (x, y, width, height)
function draw() {
  image(ballin, width/2, 100, 100, 100);
  image(bruh, width/2, 200, 100, 100);
  image(thebible, width/2, 300, 100, 100)
}
