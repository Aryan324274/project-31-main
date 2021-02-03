
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var maxDrops=100;
function preload(){
    
}

function setup(){
    createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;




	Engine.run(engine);
    
}

function draw(){
    rectMode(CENTER);
  background(0);

 

  rand = Math.round(random(1,4));
  if(frameCount%80===0){
    thunderCreatedFrame=frameCount;
    thunder = createSprite(random(10,370),random(10,30),10,10);
    switch(rand){
      case 1:thunder.addImage(thunder1);
      break;
      case 2:thunder.addImage(thunder2);
      break;
      default:break;
    }
    thunder.scale=random(0.8,0.6)
  }

  

  drawSprites();
    
}   

