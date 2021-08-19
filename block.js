class Block{
    constructor(x, y, width, height) {
        var options = {
              friction:1,
              restitution:0.5,
              density:10       
        }
        this.box = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        World.add(world, this.box)
        this.box.visibility = 255
        this.height = height;
        this.boxImg = loadImage("block.png")

      }
      display(){
        
        
        if(this.box.speed > 3){
          push()
          tint(255,this.box.visibility)
           this.box.visibility = this.box.visibility - 10
          imageMode(CENTER)
          image(this.boxImg,this.box.position.x,this.box.position.y,this.width,this.height)
          World.remove(world,this.box)
          pop()
        }
        else{
        var angle = this.box.angle;
        var pos= this.box.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.boxImg,0,0,this.width, this.height);
        pop();
        }
        }

        score(){
          if(this.box.visibility < 0 && this.box.visibility > -500){
          score = score + 1
            console.log(score)
    
          }
        }
      
}
