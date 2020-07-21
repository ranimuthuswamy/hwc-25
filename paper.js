class Ball  {
    constructor(x,y,radius){
        var options={
            
            restitution:0,
            isStatic:false,
            friction:0,
            density:3.7
        } 
        //super(x,y,50,50)
        this.body=Bodies.circle(x,y,(radius-20)/2,options);
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
        image(this.image,0,0,this.radius,this.radius);
        pop();
    }
}






