class Wire {
 constructor(bodyA,pointB){

  var options = {
      bodyA : bodyA
      , pointB : pointB,
       stiffness : 0.04,
     length : 10,



  }
  this.caterpult1 = loadImage("sprites/sling1.png");
  this.caterpult2 = loadImage("sprites/sling2.png");
  this.caterpult3 = loadImage("sprites/sling3.png");
  this.pointB = pointB;
  this.wire = Constraint.create(options);
  World.add(world,this.wire);

 }
release(){
  this.wire.bodyA = null;
}
attach(body){
  this.wire.bodyA = body;
}
 display(){
   image(this.caterpult1,200,20);
   image(this.caterpult2,170,20);
   push();
if(this.wire.bodyA){
  stroke(49,22,8);
  if(this.wire.bodyA.position.x<220){

  strokeWeight(7);
  line(this.wire.bodyA.position.x-20,this.wire.bodyA.position.y,this.pointB.x-10, this.pointB.y);
  line(this.wire.bodyA.position.x-20,this.wire.bodyA.position.y,this.pointB.x+30, this.pointB.y);
  image(this.caterpult3, this.wire.bodyA.position.x-30, this.wire.bodyA.position.y-10,15,30);
 } 
else{
  strokeWeight(4);
  line(this.wire.bodyA.position.x+25,this.wire.bodyA.position.y,this.pointB.x-10, this.pointB.y);
  line(this.wire.bodyA.position.x+25,this.wire.bodyA.position.y,this.pointB.x+30, this.pointB.y);
  image(this.caterpult3, this.wire.bodyA.position.x+25, this.wire.bodyA.position.y-10,15,30); 
     }
    }
    pop();
   } 
  }
