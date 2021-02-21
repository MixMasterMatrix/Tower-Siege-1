const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, platform;
var bird, slingShot;

function preload() {
 
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(600,height,1200,20);

    platform1 = new Ground(550,300,250,10);
    
    bird = new Bird(100,90);

    box1 = new Box(360 + 100,100,30,30);
    box2 = new Box(390 + 100,100,30,30);
    box3 = new Box(420 + 100,100,30,30);
    box4 = new Box(450 + 100,100,30,30);
    box5 = new Box(480 + 100,100,30,30);
    box6 = new Box(510 + 100,100,30,30);
    box7 = new Box(540 + 100,100,30,30);

    box8 = new Box(390 + 100,100,30,30);
    box9 = new Box(420 + 100,100,30,30);
    box10 = new Box(450 + 100,100,30,30);
    box11 = new Box(480 + 100,100,30,30);
    box12 = new Box(510 + 100,100,30,30);

    box13 = new Box(420 + 100,100,30,30);
    box14 = new Box(450 + 100,100,30,30);
    box15 = new Box(480 + 100,100,30,30);

    box16 = new Box(450 + 100,100,30,30);

    slingshot = new SlingShot(bird.body,{x:150, y:80});
}

function draw(){
    background("black");
    Engine.update(engine);
    strokeWeight(4);
    
    bird.display();

    ground1.display();
    platform1.display();
    
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();

    box13.display();
    box14.display();
    box15.display();

    box16.display();

    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
