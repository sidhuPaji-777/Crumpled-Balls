const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, ground;
var plank1, plank2, plank3;

function preload()
{
	
}

function setup() {
	createCanvas(900, 650);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	// Creating paper
	paper = new Paper(width/2-350, height/2, 40);

	// Creating Dustbin
	plank1 = new Dustbin(600, 620, 10, 100);
	plank2 = new Dustbin(750, 620, 10, 100);
	plank3 = new Dustbin(675, 632, 140, 10);

	// Creating ground
	
	ground = new Ground(width/2, 645, 1000, 15);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

//   plank2.collide(plank1);
//   paper.collide(plank2);



  paper.display();
  plank1.display();
  plank2.display();
  plank3.display();
  ground.display();

  if(keyDown("SPACE"))
  {
	  Matter.Body.applyForce(paper.body, paper.body.position, {x:0, y:-100})
  }
  
//   keyPressed();
  drawSprites();
}


function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(paper.body, paper.body.position, {x:250, y:-250})
	}


	else if(keyCode === LEFT_ARROW)
	{
		Matter.Body.applyForce(paper.body, paper.body.position, {x:-150, y:0})
	}

	else if(keyCode === RIGHT_ARROW)
	{
		Matter.Body.applyForce(paper.body, paper.body.position, {x:150, y:0})
	}
}