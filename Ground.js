class Ground{
    constructor(x,y,width,height)
    {

    var groundProps = {
        isStatic:true
    }
    this.ground  = Bodies.rectangle(x,y,width,height,groundProps);
    this.width = width;
    this.height = height;
    World.add(world,this.ground);
} 
display(){
    fill("brown");
    rectMode(CENTER);
    rect(this.ground.position.x , this.ground.position.y, this.width, this.height);
}
} 