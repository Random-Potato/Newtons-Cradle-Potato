
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball1, ball2, ball3, ball4, ball5;
var post;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball1 = new ballMake(400,350,40);
	ball2 = new ballMake(400+40,350,40);
	ball3 = new ballMake(400+80,350,40);
	ball4 = new ballMake(400-40,350,40);
	ball5 = new ballMake(400-80,350,40);
	spost = new roof(10,10,10,10);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(21,213,223);

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  post.display();
  drawSprites();
 
}



