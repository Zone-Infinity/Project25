class Dustbin{
    constructor(x, y){
        this.box1 = Bodies.rectangle(x, y, 100, 15 , {isStatic:true});
	    this.box2 = Bodies.rectangle(x+50, y-50, 15,110, {isStatic:true});
	    this.box3 = Bodies.rectangle(x-50, y-50, 15,110, {isStatic:true});

        this.image = loadImage("dustbingreen.png");

        World.add(world, this.box1);
	    World.add(world, this.box2);
	    World.add(world, this.box3);
    }
    display(){
        rectMode(CENTER);
        imageMode(CENTER);
        fill("white");
        //rect(this.box1.position.x, this.box1.position.y, 100, 15);
        //rect(this.box2.position.x, this.box2.position.y, 15, 110);
        //rect(this.box3.position.x, this.box3.position.y, 15, 110);
        image(this.image , 600, 240, 100, 100);
    }
}