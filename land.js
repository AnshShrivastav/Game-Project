class Land
{
    constructor(x,y,width,height){
        var options={
            isStatic: true,
            friction:2,
            density:10
            
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(myWorld,this.body);
        this.width = width;
        this.height = height;
        this.image = loadImage("g1.png");

    }
    display(){
        var position=this.body.position;
        fill("yellow");
        imageMode(CENTER);
        image(this.image,position.x,position.y,this.width,this.height);
    }
}