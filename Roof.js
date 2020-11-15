class roof{
    constructor(x,y,width,height,angle){
      var options = {
          isStatic: true,
          restitution: 0.8,
          density: 1,
          friction: 1.5
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world,this.body);
  }
  display(){
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      rectMode(CENTER);
      rectangle(pos.x,pos.y,this.width,this.height);
      fill("red");
      pop();
  }
    
  }
  