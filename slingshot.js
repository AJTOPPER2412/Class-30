class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.08,
            length: 10
        }
        this.slingshot = Constraint.create(options);
        World.add(world, this.slingshot);
        
    }

    display(){
        push()
        if(this.slingshot.bodyA){
        var pointA = this.slingshot.bodyA.position;
        var pointB = this.slingshot.pointB;
        strokeWeight(4);
        stroke(48,22,8)
      //  line(pointA.x -20, pointA.y, pointB.x, pointB.y);   
        line(pointA.x+20, pointA.y, pointB.x + 30, pointB.y); 
     //   rectMode(CENTER)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
     //   rect(this.slingshot, pointA.x-25, pointA.y-10,10,40);                                                                   
        }
         pop()
    }

    fly(){
        
        this.slingshot.bodyA = null
        
    }
    
    attach(bodyA){
        this.slingshot.bodyA = bodyA
        
        }
  }