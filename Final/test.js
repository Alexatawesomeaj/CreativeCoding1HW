var player = []
var platforms = []
var canJump = true
var momentum = 0
var temp = 500
var needFloat = false
var notColliding = true

function setup() {
    createCanvas(1000, 500)

    var b = new Player()
    player.push(b)

    var c = new Platform(100, 500, 50, -25)
    platforms.push(c)

    var c = new Platform(200, 475, 50, -25)
    platforms.push(c)
}

function draw() {
    background(0)

    player[0].show()
    player[0].edges()
    player[0].gravity()
    player[0].move()
    player[0].collide()
    player[0].hasMomentum()
    player[0].float()
    for(var a = 0; a < platforms.length(); a++){
        platforms[a].show()
    }
    console.log(player[0].pos.y)
}

class Platform {
    constructor(x, y, w, h) {
        this.pos1 = createVector(x, y)
        this.pos2 = createVector(w, h)
    }
    show() {
        noStroke()
        fill(255)
        rect(this.pos1.x, this.pos1.y, this.pos2.x, this.pos2.y)
    }
}

class Player {
    constructor() {
        this.size = 25
        this.pos = createVector(10, 500)
        this.vel = 0
        this.below = this.pos.y - 1
        this.above = this.pos.y + this.size + 1
        this.left = this.pos.x - 5
        this.right = this.pos.x + this.size + 5
    }
    
    edges() {
        if (this.pos.x < 0) {this.pos.x = 0}
        if (this.pos.x > 1000 - this.size) {this.pos.x = 1000 - this.size}
        if (this.pos.y >= 500) {this.pos.y = 495}
        if (this.pos.y <= 25) {this.pos.y = 25}
    }
    
    show() {
        noStroke()
        fill(255)
        rect(this.pos.x, this.pos.y, this.size, 0-this.size)
    }

    collide() {
        for(var i = 0; i < platforms.length; i ++)
        {
            if (this.pos.x < platforms[i].pos1.x + platforms[i].pos2.x &&
                this.pos.x + this.size > platforms[i].pos1.x &&
                this.pos.y > platforms[i].pos1.y + platforms[i].pos2.y &&
                this.pos.y - this.size < platforms[i].pos1.y)
                {
                    if (this.below >= platforms[i].pos1.y + platforms[i].pos2.y) {
                        this.pos.y = platforms[i].pos1.y + platforms[i].pos2.y
                    } else if (this.right > platforms[i].pos1.x) {
                        this.pos.x = platforms[i].pos1.x - 7
                    } else if (this.left <= platforms[i].pos1.x + platforms[i].pos2.x + 1){  
                        this.pos.x = platforms[i].pos1.x + platforms[i].pos2.x + 7
                        } 
                }
            }
    }
    
    move() {
        if (keyIsDown(68)) {
            if (notColliding) 
                {this.pos.x += 5}
            }
        if (keyIsDown(65)) {
            if (notColliding) {
                this.pos.x -= 5}
            }
    }
    jump() {
        if (momentum == 0) {
            needFloat = true
            setTimeout(() => {needFloat = false}, 250);
        }
    }
    gravity() {
        this.pos.y += 5
    }
    hasMomentum() {
        momentum = temp - this.pos.y
        temp = this.pos.y
    }
    float() {
        if (needFloat == true) {
            this.pos.y -= 10
        }
    }
}

function keyPressed() {
    if (key == " ") {player[0].jump()}
}