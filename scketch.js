class ComputerBase{
constrūctor(x,y,width,height){
var options = {
    isStatic: true
}
}

this.body = Bodies.rectangle(x,y,wisth,height,options);
this.width = width;
this.height = height;
this.loadImage("./assets/base2.png");

World.add(world,this.body);
}

display() {
var pos = this.body.position;
var angle = this.body.angle;

push();
translate(pos.x,pos.y);
rotate(angle);
imageMode(CENTER);
image(this.image,0,0,this.width,this.height);

pop();
}

playerBase=newPlayerBase(300,random(450,height-300),180,150);
player-newPlayer(285,playerBase.body.position.y-153,50,180);





































