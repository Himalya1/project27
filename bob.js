class Bob{
        constructor(x,y){
        var options={
            isStatic: false,
            restitution: 1,
            friction:0,
            density: 7.8
        }
        this.body = Bodies.circle(x,y,25,options);
        this.radius=25;
        World.add(world, this.body);
  
       // console.log(this.body);
    }
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        fill("red");
        ellipse(0,0,this.radius,this.radius);
        
        pop();
    }
}