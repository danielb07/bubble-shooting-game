class Bubble {
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.angle = 0;
    }

    display(){
        push();
        rectMode(CENTER)
        translate(this.x, this.y);
        rotate(Rect.angle)
        rect(20, 0, 10, 10);
        pop();

    }

    move(){
        this.x += 2;
    }

    
}