function setup() {
    createCanvas(400, 400);
  }
  
  
  function draw() {
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