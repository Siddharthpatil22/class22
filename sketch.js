const Engine = Matter.Engine;
const World =Matter.World;
 const Bodies = Matter.Bodies;
 
 var engine,world,ground,ball

function setup() {
  createCanvas(800,400);
 // create an engine
 engine = Engine.create();
 world=engine.world;
 var ground_options ={ isStatic: true }
 ground = Bodies.rectangle(400, 390, 800, 30,ground_options);

 var ball_options ={ restitution: 1.0 }
ball=Bodies.circle(300,30,50,ball_options)

World.add(world,ground)
World.add (world,ball)
console.log(ground)
console.log(ball)
}

function draw() {
  background(0,0,0);  
Engine.update(engine)

fill("green");
rectMode(CENTER)

rect(ground.position.x,ground.position.y,800,30)

fill("red")
ellipseMode(RADIUS)
ellipse(ball.position.x,ball.position.y,50,50)
  drawSprites();
}