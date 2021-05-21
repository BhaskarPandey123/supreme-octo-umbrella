var helicopterIMG, helicopterSprite, packageSprite,packageIMG, bg, bgImg, bgSound;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1, box2, box3, hit;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
	bgImg = loadImage("1.png")
	bgSound = loadSound("bgsound.mp3")
	hit = loadSound("Boom.mp3")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	bg = createSprite(300, 345, 800, 700);
	bg.addImage(bgImg);
	bg.scale = 2;

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6


	//groundSprite=createSprite(width/2, height-55, width,10);
	//groundSprite.shapeColor=color(255)

	box1 = new Box(400, 665, 200 ,20)
	box2 = new Box(290, 600, 20 ,150)
	box3 = new Box(500, 600, 20 ,150)

	engine = Engine.create();
	world = engine.world;
	
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	ground.visibla =  false;
 	World.add(world, ground);

	helicopter = Bodies.circle(width/2, 200, 5, {isStatic: false});
	World.add(world, helicopter);

	bgSound.loop();
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  //sound();
  drawSprites();
  box1.display();
  box2.display();
  box3.display();
}

function keyPressed() {
 if (keyCode===DOWN_ARROW) {
	Matter.Body.setStatic(packageBody, false);   
  }
  /*(if (keyCode===RIGHT_ARROW){
	  Matter.Body.setPosition = function(helicopter, width) {
        var delta = Vector.sub(width/2, helicopter.position.x);
        body.position.x += delta.x;
  	}*/
  }

/*function sound(){
	  if(packageSprite.isTouching(box1)){
			hit.play();
	  }
	}*/