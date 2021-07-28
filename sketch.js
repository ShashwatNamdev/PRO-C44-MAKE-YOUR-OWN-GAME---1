var player;
var backGround;
var wall1,wall2,wall3,wall4;

function preload(){
  bgImg = loadImage("Images/backgroundImg.jpg");
}

function setup() {
  createCanvas(windowWidth/2,windowHeight/2);
  
  backGround = createSprite(windowWidth/2,windowHeight/2);
  backGround.addImage(bgImg);
  backGround.scale = 3;

  wall1 = createSprite(1780,500,40,2800);
  wall1.visible = false;
  wall2 = createSprite(650,1665,2800,40);
  wall2.visible = false;
  wall3 = createSprite(0,500,40,2800);
  wall3.visible = false;
  wall4 = createSprite(650,-728,2800,40);
  wall4.visible = false;
  
  player = createSprite(windowWidth/2,windowHeight/2,20,20);
  player.shapeColor = "white";
}

function draw() {
  background(0);
  camera.x = player.x;
  camera.y = player.y;

  console.log(player.x);
  console.log(player.y);

  if(frameCount%10===0){
    var zombie = createSprite(400,400,20,20);
    zombie.shapeColor = "red";
    zombie.x = random(-400,1580);
    zombie.y = random(-635,1622);
  }
  player.collide(wall1);
  player.collide(wall2);
  player.collide(wall3);
  player.collide(wall4);
  
  keyPressed();
  drawSprites();
}

function keyPressed(){
  if(keyDown("UP_ARROW")){
    player.y = player.y-9;
  }
  if(keyDown("DOWN_ARROW")){
    player.y = player.y+9;
  }
  if(keyDown("RIGHT_ARROW")){
    player.x = player.x+9;
  }
  if(keyDown("LEFT_ARROW")){
    player.x = player.x-9;
  }
}