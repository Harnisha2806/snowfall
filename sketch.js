/*var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;*/

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bg;
var ground;
var snowfall = [];
var snow = 15;

function preload(){
  bg = loadImage("snow3.jpg");
}


function setup() {
  createCanvas(1000,600);

  engine = Engine.create();
  world = engine.world;

  

  if(frameCount % 90 === 0){
    for(var s = 0; s < snow; s++){
    snowfall.push(new Snow(random(width/2-25 ,width/2+25),10,10));
    }
    }

}

function draw() {
  background(bg);  

  Engine.update(engine);

  for(var s = 0; s < snow; s++){
    snowfall[s].display();
    snowfall[s].changePosition();
    } 

  


  drawSprites();
}