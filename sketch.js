var jaxson, jaxson_running;
var path, path_travelling;

function preload(){
  //pre-load images
  jaxson_running = loadAnimation("Runner-1.png", "Runner-2.png");
  path_travelling = loadAnimation("path.png");
}

function setup(){
  createCanvas(400,400);

  //create sprites here
  path = createSprite(200,200,10,400);
  path.addAnimation("running", path_travelling);
  path.velocityY=4;

  jaxson = createSprite(200,200,10,10);
  jaxson.addAnimation("running", jaxson_running);
  jaxson.scale=0.2;
} 

function draw() { 
  background(180);
  jaxson.x=World.mouseX;

  
  if(path.y > 400){
  path.y = height/2;
  }



  drawSprites();
}
