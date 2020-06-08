let Rect;
let bubble;

function setup() {
    createCanvas(400,400);
    // createCanvas(displayWidth,displayHeight);
    Rect = new Shooter(200, 200);
    bubble = new Bubble(200,200)


}
 
function draw() {
    background(200)
    Rect.display();
    bubble.display();
    

    if(keyIsDown(65)){
        Rect.angle  -= 0.05;
        
        
    }

    if(keyIsDown(68)){
        Rect.angle  += 0.05;
        
       
    }

    if(Rect.angle === bubble.angle){
        // console.log("bubble.angle")
    }

    if(keyCode === 32 ){
        
        // bubble.y = 200;
        bubble.move();
        
    }

        // if(bubble.x > 350){
        //     bubble.x = 200
        // }
        
    

   
}
// this will help with the position
mousePressed = () => {
    console.log(mouseX+", "+mouseY);
    
}