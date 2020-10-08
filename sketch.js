var fixed,move;
var pen,bat,computer;

function setup() {
  createCanvas(400,400);
  fixed = createSprite(200,200,30,30);
  fixed.shapeColor = "green";
  //fixed.velocityX = 5;
  //fixed.velocityY = 5;
  move = createSprite(300,200,30,30);
  move.shapeColor = "blue";
  move.velocityX = -5;
  move.velocityY = -4;

  pen = createSprite(300,100,20,20);
  pen.shapeColor = ("yellow"); 

  bat = createSprite(100,100,20,20);
  bat.shapeColor = ("orange");
  bat.velocityX = 9;
  bat.velocityY = 5;

  computer = createSprite(200,300,20,20);
  computer.shapeColor = ("pink");

}

function draw() {
  background(255,255,255);

 // move.x = World.mouseX;
  //move.y = World.mouseY;
  if(isTouching(bat,move)){
    bat.shapeColor = "red";
    move.shapeColor = "red";  

  } 
  else
  {
    bat.shapeColor = "green";
    move.shapeColor = "blue";

  }

  bounceOff(bat,move);
  
  drawSprites();
}


function isTouching(object1,object2){
  if(object1.x-object2.x < object1.width/2 + object2.width/2 && object2.x-object1.x < object1.width/2 + object2.width/2 && object2.y-object1.y <  object1.height/2 + object2.height/2 && object1.y - object2.y <  object1.height/2 + object2.height/2 ){
    return true;
  
    
    

  }
  else{

    return false;
   


  }



}


function bounceOff(object1,object2){
  if(object1.x-object2.x < object1.width/2 + object2.width/2 && object2.x-object1.x < object1.width/2 + object2.width/2 && object2.y-object1.y <  object1.height/2 + object2.height/2 && object1.y - object2.y <  object1.height/2 + object2.height/2 ){

    object2.velocityX = object2.velocityX * (-1);
    object2.velocityY = object2.velocityY * (-1);

    object1.velocityX = object1.velocityX *(-1);
    object1.velocityY = object1.velocityY*(-1);


  }



}