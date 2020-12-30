const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

function setup() { 
  createCanvas(480,800);
  
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400,800,900,10);

  for(var d =0;d<=width;d = d+80){
    divisions.push(new Division(d,700,10,200));
  }  
  for (var j = 40; j <= width; j = j + 50){
    plinkos.push(new Plinko(j, 75));
  }
  for (var j = 15; j <= width - 10; j = j + 50){
    plinkos.push(new Plinko(j, 175));
  }
  for (var j = 40; j <= width; j = j + 50){
    plinkos.push(new Plinko(j,275));
  }
  for (var j = 15; j <= width - 10; j = j + 50){
    plinkos.push(new Plinko(j, 375));
  }

  //spawn particles
}

function draw() {
  Engine.update(engine);
  background("black");
  
  if (frameCount % 60 === 0){
    particles.push(new Particle(random(width/2-20, width/2+20), 10, 10));
  }
     

  ground.display();
  
  for(var j=0;j<plinkos.length;j++){
    plinkos[j].display();

  }
  for(var j=0;j<divisions.length;j++){
    divisions[j].display();

  }
  for(var j=0;j<particles.length;j++){
    particles[j].display();

  }

  drawSprites();
  
  
}

