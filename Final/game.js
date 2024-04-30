//Oh boy... here we go...
function setup(){
    createCanvas(1000, 500)
    frameRate(60)
}

var playerX = 20;
var playerY = 490;
var momentum = 0;
var jump = true;
var state = 1;

function draw(){
    background(0);
    fill(255);
    noStroke();

    circle(playerX, playerY, 20);
    fill(255);
    rect(100,501,150,-21);

    if (keyIsDown(68)){
        if (playerX + 10 < 1000) {playerX += 5;}
    }
    if (keyIsDown(65)){
        if (playerX - 10 > 0) {playerX -= 5;}
    }
}

function keyPressed(){
    if (key == " ")
    {
        if (jump == true){
        jump = false;
        playerY -= 50;
        setTimeout(() => {playerY += 50; jump = true}, 500);
        }
    }
}