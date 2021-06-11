class Obstacle2
{
    constructor(x,y,width,height){
        var options={
            friction:1,
            density:1,
            
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(myWorld,this.body);
        this.width = width;
        this.height = height;
        this.image = loadImage("alien2.png");
        Matter.Body.setMass(this.body,this.body.mass*5);
    }
    display(){
        var position=this.body.position;
        imageMode(CENTER);
        image(this.image,position.x,position.y,this.width,this.height);
        var temp1 = position.x + 5;
        var temp2 = position.x - 5;
        if(this.body.position.x < temp1){
           Matter.Body.applyForce(this.body,{x:this.body.position.x,y:this.body.position.y}, {x:1.0,y:0});
        }
        if(this.body.position.x > temp2){
           Matter.Body.applyForce(this.body,{x:this.body.position.x,y:this.body.position.y}, {x:-1.0,y:0});
        }
    }
}