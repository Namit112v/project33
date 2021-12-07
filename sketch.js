const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var x;
var engine, world;
var backgroundIMG,platform;
var snow1,snow2,snow3,snow4,snow5;
var snow1IMG,snow2IMG,snow3IMG,snow4IMG,snow5IMG;
var boy,boyIMG;

function preload(){
 backgroundIMG = loadImage("snow1.jpg");
 boyIMG = loadImage("Boy.png");
 snow5IMG = loadImage("snow5.webp");
 snow4IMG = loadImage("snow4.webp");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
   boy = createSprite(400, windowHeight*(3/4), 50, 50);
   boy.addImage(boyIMG);
   boy.scale= 0.45
   engine = Engine.create();
  world = engine.world;
}

function draw() {
  background(backgroundIMG);  
  drawSprites();

  spawnSnowFlakes();
}

function spawnSnowFlakes() {

  if(frameCount%50==0){
    x=Math.round(random(50,windowWidth-50))
    snow5= createSprite(x,25,20,20);
    snow5.addImage(snow5IMG);
    snow5.scale= 0.1234567
    snow5.velocityY= 7
    snow5.lifetime= 500;
  }
}