//details of Title Text
  var titleX = 0;
  var titleY = 24;
  var size = 24;
//location of Author Text
  var authX = 165;
  var authy = 160;
//general arm details
  var armSize = 9;
  var armColorR = 235;
  var armColorG = 187;
  var armColorB = 129;
//right arm pos
  var rArmPosX1 = 220;
  var rArmPosY1 = 40;
  var rArmPosX2 = 240;
  var rArmPosY2 = 5;
//left arm pos
  var lArmPosX1 = 179;
  var lArmPosY1 = 54;
  var lArmPosX2 = 165;
  var lArmPosY2 = 80;
//head details
  var headR = 235;
  var headG = 187;
  var headB = 129;
  var headX = 199;
  var headY = 22;
  var headD = 36;
//shirt color
  var shirtR = 36;
  var shirtG = 96;
  var shirtB = 191;
//chest pos
  var chestX1 = 186;
  var chestY1 = 40;
  var chestX2 = 27;
  var chestY2 = 52;
//left sleeve
  var lSleeveX1 = 186;
  var lSleeveY1 = 40;
  var lSleeveX2 = 186;
  var lSleeveY2 = 53;
  var lSleeveX3 = 171;
  var lSleeveY3 = 53;
//right sleeve
  var rSleeveX1 = 213;
  var rSleeveY1 = 40;
  var rSleeveX2 = 213;
  var rSleeveY2 = 53;
  var rSleeveX3 = 229;
  var rSleeveY3 = 40;
//pants color
  var pantR = 1;
  var pangG = 5;
  var pantB = 15;


function sleep(ms) {
  //Borrowed code to implement a delay (sleep) function
  return new Promise(resolve => setTimeout(resolve, ms));
  }

function setup() {
  //Generates a canvas to draw on top of
    createCanvas(800, 1200);
  }
  
  
  function draw() {
    //Generates a color for canvas (clear), and the text on it
    clear();
    textSize(24);
    fill(255);
    textStyle(ITALIC);
    strokeWeight(0);
    textFont("Gabriola")
    text("Waving Man", 0, 24);
    textFont("Ink Free");
    text("Alex K", 165, 160);
    
    //right arm
    strokeWeight(9);
    stroke(235, 187, 129);
    line(220, 40, 240, 5);
    
    //left arm
    line(179, 54, 165, 80);
    
    //head
    fill(235, 187, 129);
    strokeWeight(0);
    circle(199, 22, 36);
    
    //chest
    fill(36, 96, 191);
    rect(186, 40, 27, 52);
    
    //sleeves
    triangle(186, 40, 186, 53, 171, 53);
    triangle(213, 40, 213, 53, 229, 40);
    
    //left leg
    fill(1, 5, 15);
    triangle(178, 130, 198, 92, 190, 135);
    triangle(178, 130, 186.5, 92, 199, 92);
    //quad(178, 130) *TODO
    
    //right leg
    triangle(200, 92, 202, 135, 214, 92);
    triangle(212, 91, 202, 135, 215, 130);
    
    //face
    fill(255);
    circle(192, 19, 8);
    circle(205, 19, 8);
    fill(0);
    circle(192, 19, 4);
    circle(205, 19, 4);
    arc(199, 29, 14, 14, 0, PI, CHORD);
    fill(255,0,0);
    ellipse(199, 34, 7, 4);
    
    //hair
    fill(31, 16, 5);
    arc(199, 13, 32, 20, PI, TWO_PI, CHORD);
  }