class Player
{
    constructor(x,y){
        var options={
            restitution:0.1,
            friction:2,
            density:10,
            mass:55
        }
        this.body=Bodies.rectangle(x,y,30,50,options);
        World.add(myWorld,this.body);
        this.image=loadImage("player2 (2).png")

    }
    display(){
        var position=this.body.position;

        imageMode(CENTER);
        image(this.image,position.x,position.y,40,50);
    }
}