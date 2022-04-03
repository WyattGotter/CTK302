let cars = [];

function setup() {
  createCanvas(500, 500);
imageMode(CENTER);
  for (let i = 0; i < 20; i++){
    cars.push(new Car());
  }
extramath = loadImage("assets/extramath.png");
noStroke();
}

function draw() {
  background('white');
  image(extramath, width/2, height/2, 500, 500);
cars.push(new Car());

//for (let i = 0; i < 20; i++){
for (let i = 0; i < cars.length; i++) {
  cars[i].display();
  cars[i].move();
  if (cars[i].a <= 0) {
    cars.splice(i, 1);
  //if (cars[i].a <= 0){
  //  cars.splice(i, 1);
    }
  }
}

class Car {

  constructor() {
    // attributes
    this.pos = createVector(100, 100);
    this.vel = createVector(random(10), random(10));
    this.r = (200);//random(255);
    this.g = (100);//random(255);
    this.b = (255);//random(255);
    this.a = random(200, 255);
    this.s = random(5, 20);//random(5, 20);
  }

  // methods
  display() {
    fill(this.r, this.g, this.b, this.a);
    textSize(30);
    text('Math', this.pos.x, this.pos.y, 20);
  }

  move() {
    this.pos.add(this.vel);
    this.a = this.a - 5;
  }

}
