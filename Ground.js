class Ground{
    constructor(x,y,width,height){
        var options ={
            isStatic: true
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill("brown");

        rect(pos.x, pos.x, this.width, this.height);
    }
}