//details of Title Text
  var titleX = 0;
  var titleY = 24;
  var size = 24;
  var titleT = "Waving Man"
//location of Author Text
  var authX = 165;
  var authY = 160;
  var authT = "Alex K";
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
  var lLegX2 = 200;
  var lLegY2 = 92;
  var lLegX3 = 194;
  var lLegY3 = 135;
  var lLegX4 = 180;
  var lLegY4 = 130;
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
  var armChange = 2;
  var timeVar = 0;
  var move = false;
  var rectX = (2*Math.random()) + 1;
  var rectY = (2*Math.random()) + 1;
  var authMoveX = 2;
  var authMoveY = 0;
  var headSize = 1;
  var headMoveX = 2;
  var headMoveY = 2;

function sleep(ms) {
  //Borrowed code to implement a delay (sleep) function
  return new Promise(resolve => setTimeout(resolve, ms));
  }

function setup() {
  //Generates a canvas to draw on top of
    createCanvas(800, 400);
  }
  
  
  function draw() {
    //Generates a color for canvas (clear), and the text on it
    clear();
    textSize(size);
    fill(255);
    textStyle(ITALIC);
    strokeWeight(0);
    textFont("Gabriola")
    text(titleT, titleX, titleY);
    textFont("Ink Free");
    text(authT, authX + authMoveX, authY + authMoveY);
    
    //right arm
    strokeWeight(armSize);
    stroke(armColorR, armColorG, armColorB);
    line(rArmPosX1 + killArc, rArmPosY1, rArmPosX2 + killArc, rArmPosY2);
    
    //left arm
    line(lArmPosX1 + killArc, lArmPosY1, lArmPosX2 + killArc, lArmPosY2);
    
    //head
    fill(headR, headG, headB);
    strokeWeight(0);
    circle(headX, headY, headD);
    
    //chest
    fill(shirtR, shirtG, shirtB);
    rect(chestX1, chestY1, chestX2, chestY2);
    
    //sleeves
    triangle(lSleeveX1 + killArc, lSleeveY1, lSleeveX2 + killArc, lSleeveY2, lSleeveX3 + killArc, lSleeveY3);
    triangle(rSleeveX1 + killArc, rSleeveY1, rSleeveX2 + killArc, rSleeveY2, rSleeveX3 + killArc, rSleeveY3);
    
    //left leg
    fill(pantR, pantG, pantB);
    quad(lLegX1 + killArc, lLegY1, lLegX2 + killArc, lLegY2, lLegX3 + killArc, lLegY3, lLegX4 + killArc, lLegY4);
    
    //right leg
    quad(rLegX1 + killArc, rLegY1, rLegX2 + killArc, rLegY2, rLegX3 + killArc, rLegY3, rLegX4 + killArc, rLegY4);

    //face
    fill(255);
    circle(lEyeX + killArc, lEyeY, lEyeD);
    circle(rEyeX + killArc, lEyeY, lEyeD);
    fill(0);
    circle(lPupilX + killArc, lPupilY, lPupilD);
    circle(rPupilX + killArc, lPupilY, lPupilD);
    arc(199 + killArc, 29 + killArc, 14 + killArc, 14 + killArc, 0 + killArc, PI, CHORD);
    fill(255,0,0);
    ellipse(199 + killArc, 34 + killArc, 7 + killArc, 4 + killArc);
    
    //hair
    fill(31, 16, 5);
    arc(199 + killArc, 13 + killArc, 32 + killArc, 20 + killArc, PI, TWO_PI, CHORD);

    //border
    noFill();
    stroke(0);
    strokeWeight(1);
    rect(1, 1, 799, 399);

    //moving the arm
    rArmPosX2 += armChange;
    if (rArmPosX2 >= 255) {armChange *= -1;} 
    if (rArmPosX2 < 225) {armChange *= -1;}
    timeVar += 1;
    if (timeVar >= 500) {move = true;}
    // sets shapes to move after a time
    if (move) {
      //moves chest
      chestX1 += rectX;
      chestY1 += rectY;

      //moves author text
      authX += authMoveX;
      authY += authMoveY;

      //voids non-important objects
      titleT = "";
      killArc = 1000;

      //moves/sizes head
      headX += headMoveX;
      headY += headMoveY;
      headD += headSize;
      if (headX + (headD/2) >= 800) {if(headMoveX == 2) {headMoveX *= -1;}}
      if (headX - (headD/2) <= 1) {if (headMoveX == -2) {headMoveX *= -1;}}
      if (headY + (headD/2) >= 400) {if (headMoveY == 2) {headMoveY *= -1;}}
      if (headY - (headD/2) <= 1) {if (headMoveY == -2) {headMoveY *=-1}}
      if (headD < 1 || headD > 60) {headSize *= -1}
      if (headD < 1) {
        headR = Math.floor((255*Math.random()));
        headG = Math.floor((255*Math.random()));
        headB = Math.floor((255*Math.random()));
      }      

      //moves name text variables
      if (authX >= 735) {
        authMoveX = 0;
        authMoveY = 2;
      }
      if (authY >= 390) {
        authMoveX = -2;
        authMoveY = 0;
      }
      if (authX <= 1) {
        authMoveY = -2;
        authMoveX = 0;
      }
      if (authY <= 24) {
        authMoveY = 0;
        authMoveX = 2;
      }
      
      //changes chest color
      if (chestX1 <= 1 || chestX1 >= 773) {
        rectX *= -1;
        shirtR = Math.floor((255*Math.random()));
        shirtG = Math.floor((255*Math.random()));
        shirtB = Math.floor((255*Math.random()));
      }
      if (chestY1 <= 1 || chestY1 >= 348) {
        rectY *= -1;
        shirtR = Math.floor((255*Math.random()));
        shirtG = Math.floor((255*Math.random()));
        shirtB = Math.floor((255*Math.random()));
      }
    }
  } 