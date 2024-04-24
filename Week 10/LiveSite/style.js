//details of Title Text
  var titleX = 0;
  var titleY = 24;
  var size = 24;
//location of Author Text
  var authX = 165;
  var authY = 160;
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
  var pantG = 5;
  var pantB = 15;
//left leg
  var lLegX1 = 185;
  var lLegY1 = 92;
  var lLegX2 = 213;
  var lLegY2 = 92;
  var lLegX3 = 217;
  var lLegY3 = 130;
  var lLegX4 = 203;
  var lLegY4 = 135;
//right leg
  var rLegX1 = 200;
  var rLegY1 = 92;
  var rLegX2 = 213;
  var rLegY2 = 92;
  var rLegX3 = 217;
  var rLegY3 = 130;
  var rLegX4 = 203;
  var rLegY4 = 135;
//facial features
  var lEyeX = 192;
  var lEyeY = 19;
  var lEyeD = 8;
  var rEyeX = 205;
  var rEyeY = 19;
  var rEyeD = 8;
  var lPupilX = 192;
  var lPupilY = 19;
  var lPupilD = 4;
  var rPupilX = 205;
  var rPupilY = 19;
  var rPupilD = 4;
  var killArc = 0;
//basic
  var armChange = 1


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
    textSize(size);
    fill(255);
    textStyle(ITALIC);
    strokeWeight(0);
    textFont("Gabriola")
    text("Waving Man", titleX, titleY);
    textFont("Ink Free");
    text("Alex K", authX, authY);
    
    //right arm
    strokeWeight(armSize);
    stroke(armColorR, armColorG, armColorB);
    line(rArmPosX1, rArmPosY1, rArmPosX2, rArmPosY2);
    
    //left arm
    line(lArmPosX1, lArmPosY1, lArmPosX2, lArmPosY2);
    
    //head
    fill(headR, headG, headB);
    strokeWeight(0);
    circle(headX, headY, headD);
    
    //chest
    fill(shirtR, shirtG, shirtB);
    rect(chestX1, chestY1, chestX2, chestY2);
    
    //sleeves
    triangle(lSleeveX1, lSleeveY1, lSleeveX2, lSleeveY2, lSleeveX3, lSleeveY3);
    triangle(rSleeveX1, rSleeveY1, rSleeveX2, rSleeveY2, rSleeveX3, rSleeveY3);
    
    //left leg
    fill(pantR, pantG, pantB);
    quad(lLegX1, lLegY1, lLegX2, lLegY2, lLegX3, lLegY3, lLegX4, lLegY4);
    
    //right leg
    quad(rLegX1, rLegY1, rLegX2, rLegY2, rLegX3, rLegY3, rLegX4, rLegY4);

    //face
    fill(255);
    circle(lEyeX, lEyeY, lEyeD);
    circle(rEyeX, lEyeY, lEyeD);
    fill(0);
    circle(lPupilX, lPupilY, lPupilD);
    circle(rPupilX, lPupilY, lPupilD);
    arc(199 + killArc, 29 + killArc, 14 + killArc, 14 + killArc, 0 + killArc, PI, CHORD);
    fill(255,0,0);
    ellipse(199 + killArc, 34 + killArc, 7 + killArc, 4 + killArc);
    
    //hair
    fill(31, 16, 5);
    arc(199 + killArc, 13 + killArc, 32 + killArc, 20 + killArc, PI, TWO_PI, CHORD);
  }