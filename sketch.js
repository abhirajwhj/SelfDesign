var backGround,player1,player2,playerI1,playerI2,shuttle,shuttleI;
function preload(){
  backGround=loadImage("court.png")
  playerI1=loadImage("Racket1.png");
  playerI2=loadImage("Racket2.png");
  shuttleI=loadImage("shuttle.png");
}
function setup() {
  createCanvas(1200,800);
  player1=createSprite(200, 400, 50, 50);
  player1.addImage("player1",playerI1);
  player1.scale=0.4;
  player2=createSprite(1000, 400, 50, 50);
  player2.addImage("player2",playerI2);
  player2.scale=0.4;
  shuttle=createSprite(600, 400, 50, 50);
  shuttle.addImage("shuttle",shuttleI);
  shuttle.scale=0.1;
}

function draw() {
  background(backGround); 
  player2.y=mouseY; 
  drawSprites();
}