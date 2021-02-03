

const Engine = Matter.Engine;
const World = Matter.World;

const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var boy,boyS,treeS,groundS,stoneS,m1,m2,m3,m4,m5,m6,m7,m8,Launch
function preload()
{
	boy=loadImage("boy.png")
}
function setup() {

	engine = Engine.create();
	world = engine.world;
  createCanvas(1000, 600);
  background(255,255,240)
  stoneS=new stone(120,450,60)
boyS=createSprite(190,530,40,40)
boyS.addImage(boy)
boyS.scale=0.13
treeS=new tree(540,20,480,630)
treeS.scale=0.1	
groundS=new ground(500,580,1000,10)
m1=new mango(700,160,80)
m2=new mango(795,305,80);
m3=new mango(834,149,70);
m4=new mango(720,228,70);
m5=new mango(900,280,70);
m6=new mango(890,228,80);
m7=new mango(650,300,67);
Launch=new SlingShot(stoneS.body,{x:120,y:450})
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {   
  rectMode(CENTER);
  background(240,240,240);
  
  treeS.display();
  
  groundS.display();
  m1.display();
  m2.display();
  m3.display();
  m4.display();
  m5.display();
  m6.display();
  m7.display();
Launch.display();
  stoneS.display() 
   detectCollision(stoneS,m7);
   detectCollision(stoneS,m6);
   detectCollision(stoneS,m5);
  detectCollision(stoneS,m4);
  detectCollision(stoneS,m3);
  detectCollision(stoneS,m2);
  detectCollision(stoneS,m1);

  //// detectCollision(stoneS)
  drawSprites();
 
}
function mouseDragged(){
  Matter.Body.setPosition(stoneS.body,{x:mouseX,y:mouseY})  
}


function mouseReleased(){
 Launch .fly();

}
function keyPressed(){
    if(keyCode === 32){
     
        Matter.Body.setPosition(stoneS.body,{x:50,y:500})
       Launch.attach(stoneS.body);
    }
}
function detectCollision(lstone,lmango){
  mangoBodyPosition=lmango.body.position 
  stoneBodyPosition=lstone.body.position
   var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
   if(distance<=lmango.r+lstone.r)
   { Matter.Body.setStatic(lmango.body,false) } }