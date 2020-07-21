
    class Box{
        constructor(x,y,width,height){
            var options={
                isStatic:true
            } 
            this.x = x;
            this.y = y;
            this.width=width;
            this.height=height;
            this.angle = 0;

            
            this.body=Bodies.rectangle(x,y,200,20,options);
            this.lbody = Bodies.rectangle(this.x-this.width/2, this.y-this.height/2, 20, this.height,options);
            Matter.Body.setAngle(this.lbody, this.angle);

            this.rbody=Bodies.rectangle(this.x+this.width/2, this.y-this.height/2, 20, this.height, options);
            Matter.Body.setAngle(this.rbody, -1*this.angle);
            
            this.image=loadImage("dustbingreen.png");
            World.add(world,this.body);
            World.add(world, this.lbody);
            World.add(world, this.rbody);
        }
    
    
        display(){
            var lpos=this.lbody.position;
            var rpos=this.rbody.position;
            var pos=this.body.position;

            push();
            rectMode(CENTER);
            angleMode(RADIANS);
            translate(lpos.x,lpos.y);
            rotate(this.angle);           
           //fill (180);            
           //rect(0,0,this.width,this.height);
            pop();

            
            push();
            rectMode(CENTER);
            angleMode(RADIANS);
            translate(rpos.x,rpos.y);
            rotate(-1*this.angle);
            
           //fill (180);            
           //rect(0,0,this.width,this.height);
            pop();

            
            push();
            translate(pos.x,pos.y);
            imageMode(CENTER);
           //fill (180);
            image(this.image,0,-this.height/2,this.width,this.height);
            //rectMode(CENTER);
            //rect(0,0,this.width,this.height);
            pop();
        }
    }
    
    
    
    

    
