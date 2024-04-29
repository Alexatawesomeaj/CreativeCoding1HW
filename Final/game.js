//Oh boy... here we go...
function jump(){
    playerY -= 5;
}
function setup(){
    createCanvas(1000, 500);
}

var playerX = 20;
var playerY = 490;

function draw(){
    background(0);
    fill(255);
    circle(playerX, playerY, 20);

    if (playerX <= 17) {playerX = 17}

    if (keyIsDown(68)){
        playerX += 5;
    }
    if (keyIsDown(65)){
        playerX -= 5;
    }
}
function keyPressed(){
    if (key == " ") {jump();}
}