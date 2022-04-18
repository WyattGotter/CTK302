let cars = []; // declare / init an array
let frogPos; // Defines the x and y of the frogs position
let todd
let bug
let excuseme
let reversetodd
let state = 0;
let timer = 0;
let maxCars = 5;
let maxTimer = 25;
let score = 0;

function preload() {
  song1 = loadSound("assets/countryroads.mp3");
  toddhoward1 = loadSound('assets/toddhowardvoice1.mp3');
  toddhoward2 = loadSound('assets/toddhowardvoice2.mp3');
  toddhoward3 = loadSound('assets/toddhowardvoice3.mp3');
  toddhoward4 = loadSound('assets/toddhowardvoice4.mp3');
  stockcheer = loadSound('assets/stockcheer.mp3');
  losesound = loadSound('assets/losesound.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  font1 = loadFont("assets/8bitarcadein.ttf");
  reversetodd = loadImage('assets/reversetodd.png');
  winscreen = loadImage('assets/winscreen.png');
  losescreen = loadImage('assets/losescreen.png');
  todd = loadImage("assets/toddhoward.png");
  excuseme = loadImage('assets/excuseme.png');
  bug = loadImage('assets/bug.png');
  // Spawn objects
  for (let i = 0; i < 3; i++) {
    cars.push(new Car());
  }
  frogPos = createVector(width / 2, height - 100);
}

function draw() {

  switch (state) {

    case 0:
      // song1.play();
      // song1.speed(1.0);
      background(reversetodd);
      fill('green');
      text('Help Todd Howard squash all the game bugs', 100, 100);
      textFont(font1);
      break;

    case 1:
      game();
      timer++;
      if (timer > maxTimer * 25) {
        timer = 0;
        //losesound.play();
        toddhoward1.play();
        //  toddhoward3.volume(0.3);
        state = 3;

      }
      break;

    case 2: //Win
      background(winscreen);
      break;

    case 3: //Lose
      background(losescreen);
      break;
  }
  fill('green');
  textSize(70);
  text("score " + score, 30, 30);
}

function game() {
  // image(game background)
  background(excuseme);
  // iterating through the cars array
  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();

    // check the distance between this car and the frog
    if (cars[i].pos.dist(frogPos) < 50) {
      cars.splice(i, 1);
      score++;
      toddhoward2.play();
    }

  }
  if (cars.length == 0) { //They Won
    stockcheer.play();
    state = 2;
  }
  // if (maxTimer == 20) {
  //   losesound.play();
  //   state = 3;
  // }
  // if (cars.length == 1) { //They Lost
  //   losesound.play();
  //   state = 3;
  // }
  //Frog
  image(todd, frogPos.x, frogPos.y, 90, 90);
  checkForKeys();
}

class Car {
  // constructor and attributes
  constructor() {
    this.pos = createVector(random(width), random(height));
    // initialize your attributes here
    this.v = createVector(random(6), 0);
    this.r = image(bug);
    this.g = random(255);
    this.b = random(255);
    this.o = random(100);
    this.size = random(45, 140);
  }

  // methods

  display() {
    image(bug, this.pos.x, this.pos.y);
    //fill(this.r, this.b, this.g, this.o);
    // rect(this.pos.x, this.pos.y, 75, 25);
    // ellipse(this.pos.x, this.pos.y + 40, 30, 30);
    // ellipse(this.pos.x + 70, this.pos.y + 40, 30, 30);

    // textSize(this.size) ;
    // text("bruh", this.pos.x, this.pos.y) ;
  }

  move() {
    this.pos.add(this.v);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }
}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) {
    frogPos.x -= 15;
    if (frogPos.x < 0) frogPos.x = width;
  }

  if (keyIsDown(UP_ARROW)) {
    frogPos.y -= 15;
    if (frogPos.y < 0) frogPos.y = height;
  }

  if (keyIsDown(DOWN_ARROW)) {
    frogPos.y += 17;
    if (frogPos.y > height) frogPos.y = 0;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    frogPos.x += 17;
    if (frogPos.x > width) frogPos.x = 0;
  }
}

function mouseReleased() {

  switch (state) {
    case 0:
      //song1.play();
      state = 1;
      break;

    case 2: //win state
      resetTheGame();
      //song1.pause();
      state = 0;
      break;

    case 3: //lose state
      resetTheGame();
      //losesound.play();
      //song1.pause();
      state = 0;
      break;
  }
}

function resetTheGame() {
  // stockcheer.play();
  // stockcheer.speed(1.0);
  timer = 0;
  cars = [];
  score = 0;

  // Spawn objects
  for (let i = 0; i < 10; i++) {
    cars.push(new Car());
  }

}
