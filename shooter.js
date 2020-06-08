class Shooter {
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.angle = 0
    }

    display(){
        
        fill("black");
        rectMode(CENTER)
        push();
        translate(this.x, this.y);
        
        rotate(this.angle)
        
        rect(20, 0, 40, 10);
        pop();
       
       
       
    }
}