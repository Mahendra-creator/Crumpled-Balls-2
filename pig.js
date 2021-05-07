class Pig {
    constructor(x, y,colour) {
      var options = {
         restitution:0.3,
      density:1.2,
          
        
      }
      this.body = Bodies.circle(x, y,20, options);
      //this.width = 30;
      //this.height = 30;
     this.colour=colour; 
     this.image = loadImage("paper.png");
      World.add(world, this.body);
   
    }
    display(){
      var angle= this.body.angle;
      var pos =this.body.position;
      console.log(this.body);
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, 40,40);
      pop();
    }
  };