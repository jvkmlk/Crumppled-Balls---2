const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
  DustbinImage = loadImage("DustbinImg.png");
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	PAPER = new Paper(100,250,70,70);
	//fill(220, 45, 225);
	//stroke(220, 45, 225);
	GROUND = new Ground(600,height,3000,20);
	WALL_LEFT = new Ground(553,590,15,200);
	WALL_RIGHT = new Ground(747,590,15,200);
  WALL_BOTTOM = new Ground(650,685,190,15);
	Engine.run(engine);
  
}


function draw() {
  background("white");
  
  Engine.update(engine);
  fill("brown");
  GROUND.display();
  fill("red");
  WALL_LEFT.display();
  WALL_RIGHT.display();
  WALL_BOTTOM.display();
  imageMode(CENTER);
  image(DustbinImage,650,570,200,213);
  PAPER.display();


  fill ("cyan");
  textSize(30);
  text("Press space to serve",70,150);

}


function keyPressed() {
	if (keyCode === 32) {
	  Body.applyForce(PAPER.body,PAPER.body.position,{x:120,y:-105});  
	}
}