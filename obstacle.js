class Obstacle
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
        this.image = loadImage("alien1.png");
        Matter.Body.setMass(this.body,this.body.mass*5);
        this.flag=0;
    }
    display(player){
        if(this.flag===0){
            var position=this.body.position;
            imageMode(CENTER);
            image(this.image,position.x,position.y,this.width,this.height);
        
           var c=Matter.SAT.collides(player.body,this.body);
         
          if(c.collided)
           {
          this.flag=1;
           }
        }
        else{
            life-=1;
            World.remove(myWorld,this.body);
        }
      
      
             

    }
}

