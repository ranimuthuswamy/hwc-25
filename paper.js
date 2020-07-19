class Ball  {
    constructor(x,y,radius){
        var options={
            
            restitution:0.3,
            friction:0.6,
            density:0.2
        } 
        //super(x,y,50,50)
        this.body=Bodies.circle(x,y,radius,options);
         this.radius=radius;
        this.image=loadImage("./paperball.png");                                                                                                                               
        World.add(world,this.body);

    }


    display(){
        var pos=this.body.position;
        
        
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        //fill (180);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}






