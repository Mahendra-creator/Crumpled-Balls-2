const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var log1,basket;

function preload(){

  basket = loadImage("bin.png")
}


function setup(){
    var canvas = createCanvas(600,400);
    engine = Engine.create();
    world = engine.world;
    log1=new Log(450,300,"blue",180,100,10);
    log2=new Log(420+100+30,300,"blue",180,100,10);
    log3=new Log(500,350,"blue",90,10,100);
   
    
   ball1=new Pig(50,360,"red") 

   
   
    
    ground1= new ground(300,370,600,30);
}

function draw(){
    background(255);
    Engine.update(engine);
    
  
  
 log1.display();
 log2.display();
 log3.display();

  ball1.display();
 ground1.display();

imageMode(CENTER)

  image(basket,500,300,100,100)
    
    
   
}
function keyPressed(){
    if (keyCode=== UP_ARROW){
      Matter.Body.applyForce(ball1.body,ball1.body.position,{x:70,y:155});

    }

    if (keyCode=== DOWN_ARROW){
      Matter.Body.setPosition(ball1.body,{x:50,y:250});
    }
  }
  