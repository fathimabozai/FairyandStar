const Engine = Matter.Engine;
const World = Matter.World;
const Bodies  = Matter.Bodies;

var engine, world;
var canvas;
var backgroundImage;
var fairy, fairyAnimation, fairy_options;
var star,starImage, star_options;



function preload()
{
   //preload the images here
   backgroundImage = loadImage("images/starnight.png");
   fairyAnimation = loadAnimation("images/fairy1.png", "images/fairy2.png");
   starImage = loadImage("images/star.png");
}

function setup()
{
 
  canvas = createCanvas(600, 600);
  engine = Engine.create();
  world= engine.world;

  
  fairy_options = {
  
     render: {
        texture: "images/fairy1.png", 
       
        isStatic: true,
      }
    };
  fairy = Bodies.rectangle(100,380,40,40, fairy_options);
  World.add(world, fairy);
  
  

  //code for creating bouncing ball(using its restituion property)
  star_options = { restitution : 0.5 }
  star = Bodies.rectangle(500,100,20,20, star_options);
  World.add(world, star);
  star.addImage("fairysStar", starImage);
  star.scale = 0.25;
}

function draw()
{
  background(backgroundImage);
  Engine.update(engine);  

  rectMode(CENTER);
  rect(star.position.x, star.position.y, 20, 20);
  //rect(fairy.position.x, fairy.position.y, 40, 40);
}







