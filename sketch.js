var BALL1,BALL2,BALL3,BALL4;

function setup() {
  createCanvas(800,400);
  BALL1 = createSprite (400,200,50,20)
  BALL2 = createSprite(200, 100, 50, 50);
  BALL3 = createSprite(200, 300, 50, 50);
  BALL4 = createSprite(700, 220, 80, 200);
  //Wallpaper = createSprite (400,200,50,20)


 BALL2.velocityY = 3;
 BALL3.velocityY = -3;

  
}

function draw() {
  background(0);  
  BALL1.x = World.mouseX;
  BALL1.y = World.mouseY;


bounceOff(BALL2,BALL3)






if(isTouching(BALL1,BALL4)){
  BALL1.shapeColor = "green"
  BALL4.shapeColor = "green"
}else{
  BALL1.shapeColor = "red"
  BALL4.shapeColor = "red"

}




  drawSprites();
}

