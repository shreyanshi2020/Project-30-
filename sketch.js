const Engine=Matter.Engine;
const World=Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var engine, world;
var ball, ballimg;
var slingshot;
var platform;

function preload(){
  ballimg = loadImage("Polygon.png");
}

function setup() {
  createCanvas(900,400);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(450, 390, 900, 20);

  block1 = new Block(300,275,30,40);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  block16 = new Block(390,155,30,40);

  platform = new Ground(385,295,240,20);

  ball =  Bodies.circle(90,200,20);
  World.add(world,ball);

  slingshot = new SlingShot(this.ball, {x:100, y:200});

  Engine.run(engine);
}

function draw() {
  background(0);
  
  ground.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  platform.display();
  
  imageMode(CENTER);
  image(ballimg, ball.position.x, ball.position.y, 40, 40);
  slingshot.display();
}

function mouseDragged(){
  Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}
function keyPressed(){
  if(keyCode === 32) {
    slingshot.attach(this.ball);
  }
}