let player;
let obstacles = [];
let points = 0;
let messageDisplayed = false;
let messageFrameCount = 0
let lastMessagePoints = 0

function setup() {
  createCanvas(400, 400);
  player = new Player();
  for (let i = 0; i < 5; i++) {
    obstacles.push(new Obstacle());
  }
}

function draw() {
  background(220);
  player.show();
  player.update();
  for (let obstacle of obstacles) {
    obstacle.show();
    obstacle.update();
    if (collideRectRect(player.x, player.y, player.width, player.height, obstacle.x, obstacle.y, obstacle.width, obstacle.height)) {
      console.log("game over"); //If Player hits an Obstacle, they die
      noLoop();
      fill(0);
        stroke(5);
        textSize(26);
        textAlign(CENTER);
        text("You Died", width / 2 - 50, height / 2 - 50); //Death text copied from previous homework
    }
    if (obstacle.offscreen()) {
      points++;
    }
  }
  textSize(24);
  text(`Points: ${points}`, 10, 30);

  //Checking to see if inspirational message needs to be displayed
  if (points % 10000 == 0 && points > 0 && !messageDisplayed) {
    fill(0, 255, 0);
    textSize(48);
    text("You're doing great!", width/2-150, height/2);
    messageDisplayed = true;
    messageFrameCount = frameCount;
    lastMessagePoints = points;
  }

  //Remove message after a certain amount of time
  if (frameCount - messageFrameCount > 300) {
    messageDisplayed = false;
  }

  if (frameCount % 120 == 0) {
    obstacles.push(new Obstacle());
  }
}

//Creating the Player class
class Player {
  constructor() {
    this.x = width / 2;
    this.y = height - 20;
    this.width = 20;
    this.height = 20;
    this.speed = 5;
  }

  show() {
    rect(this.x, this.y, this.width, this.height); // Displaying the Player
  }

  //Movement Keys
  update() {
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= this.speed;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.x += this.speed;
    }
    this.x = constrain(this.x, 0, width - this.width);
  }
}

//Creating the Obstacle class
class Obstacle {
  constructor() {
    this.x = random(width);
    this.y = -20;
    this.width = random(20, 60);
    this.height = 20;
    this.speed = random(1, 5);
    this.color = color(random(255), random(255), random(255));
  }

  show() {
    fill(this.color); //Filling the obstacles with the random color
    rect(this.x, this.y, this.width, this.height); //Displaying the rectangles
  }

  update() {
    this.y += this.speed;
  }

  offscreen() {
    return this.y > height;
  }
}
