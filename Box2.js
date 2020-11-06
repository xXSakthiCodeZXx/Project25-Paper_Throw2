class Box2 {
    constructor(x, y, width, height) {
      var options = {
          'isStatic':true,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("sprites/dustbingreen.png");
  
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
  
      push();

      imageMode(CENTER);
      fill(50);
      image(this.image,pos.x, pos.y-90, this.width, this.height+150);
      rect(0,0,this.width,this,height);
      pop();
    }
  }