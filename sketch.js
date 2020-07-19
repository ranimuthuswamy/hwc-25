var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//const Constraint= Matter.Constraint
var box1,box2,box3,ballImage,dustbin;
var ground;
var ball;

function preload()
{
	// dustbin=loadImage("dustbingreen.png");
	// ballImage=loadImage("paperball.png");
}

function setup() {
	createCanvas(1200, 400);
	engine = Engine.create();
	world = engine.world;


	// rectMode(CENTER);
	
	//  packageBody= createSprite(width/2,200);
	//  packageBody.shapeColor=("red");
	

	
	ground=new Ground(width/2, height-35, width,10);
	//  groundSprite.shapeColor=color(255)

	box1= new Box(850,210,350,160);
	//box1.addImage("greendustbin",dustbin);	
	  //box2= new Box(1000,320,10,80);
	 //box3= new Box(1120,320,10,80);
	ball= new Ball(200,300,50);
	//ball.scale=0.5;
	

	//launcher = new Launcher(ball.body,{x:200,y:100});
	
	// packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:10, isStatic:true});
	// World.add(world, packageBody);
	

	//Create a Ground
	// ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	// World.add(world, ground);


	Engine.run(engine);

	// console.log(packageBody);
  
}


function draw() {
  rectMode(CENTER);
Engine.update(engine);
  background(180);

	ground.display();
	ball.display();
   box1.display();
   //launcher.display();
	//box2.display();
    //box3.display();
 
  //Image();

  /*if(package.touching(ground)){
	Body.setStatic(packageSprite,true);
  } */

  
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(ball.body,ball.body.position,{x:80,y:-80});
	
  }
}

// function mouseDragged(){
//     Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
// }

// function mouseReleased(){
//     launcher.fly();
// }



