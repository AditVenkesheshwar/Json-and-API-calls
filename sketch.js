const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var background, bg;
var box1, pig1;
var log;
var wire;
var bgImg;
var score = 0;
function preload() {
    //bg = loadImage("sprites/bg.png");
    getBackgroundImg();
}





function setup() {
    var canvas = createCanvas(1200, 400);
    engine = Engine.create();
    world = engine.world;

        


    ground = new Ground(600, height, 1200, 20)
    platform = new Ground(150, 305, 300, 170);
    box1 = new Box(700, 320, 70, 70);
    box2 = new Box(920, 320, 70, 70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810, 260, 300, PI / 2);

    box3 = new Box(700, 240, 70, 70);
    box4 = new Box(920, 240, 70, 70);
    pig3 = new Pig(810, 220);

    log3 = new Log(810, 180, 300, PI / 2);

    box5 = new Box(810, 160, 70, 70);
    log4 = new Log(760, 120, 150, PI / 7);
    log5 = new Log(870, 120, 150, -PI / 7);

    bird = new Bird(100, 100);

    log6 = new Log(200, 200, 10, PI / 7);

    wire = new Wire(bird.body, { x: 200, y: 50 });

    //string
    var string = " this is my coding class"
    console.log(string)

    //number 
    var num = 100
    console.log(num)

    //boolean
    var bool = true
    console.log(bool)

    //undefined
    var object
    console.log(object)

    //Re-assign the same undefined object to null 
    var object = null
    console.log(object)

    //ARRAY example 
    //an Array holding same datatype
    var arr1 = [1, 2, 3, 4]
    console.log(arr1)

    //an array holding different datatype 
    var arr2 = [1, "krish", true, null]
    console.log(arr2)

    //array storing a list of array
    var arr3 = [[1, 3], [21, 22], [3.9], [54.121]]
    console.log(arr3)
    console.log([0][1])
    arr2.push("english")
    console.log(arr2)
    arr2.pop();
    console.log(arr2)



}

function draw() {
    if(bgImg)

    background(bgImg);
    Engine.update(engine);

    //console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();
    log6.display();
    bird.display();

    wire.display();
    platform.display();
    
    noStroke()
    textSize(25)
    fill("white");
    text("score : " + score, width - 300, 50);

    pig1.score();
    pig3.score();

}

function mouseDragged() {
    Matter.Body.setPosition(bird.body, { x: mouseX, y: mouseY });
}

function mouseReleased() {
    wire.release();
}

function keyPressed() {
    if (keyCode === 32) {
        wire.attach(bird.body);

    }
}

async function getBackgroundImg(){
  var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata")
  var responseJSON = await response.json();
  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  console.log(hour); 

  if(hour>=06 && hour<=19){
      bg = "sprites/bg.png"
      }else
      {
          bg = "sprites/bg2.jpg"
      }
      bgImg = loadImage(bg);

    }




