class Snow{
    constructor(x,y){
        var options = {
            
            'frictionAir' : 1,
            'density'     : 0.01
            
        }
    this.image= loadImage("snow4.webp");
    this.body = Bodies.circle(x,y,70,70,50,options);
    
    this.radius = 35;
    this.lifetime=100;
    World.add (world,this.body);
    }
    
    changePosition(){
        if(this.body.position.y-90 > height){
        Matter.Body.setPosition(this.body,{x:random(0,1000),y:random(0,50)});
        }
        }
    display(){
        push();
        
        var pos = this.body.position;
    
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.radius,this.radius);
        pop();
    }
}