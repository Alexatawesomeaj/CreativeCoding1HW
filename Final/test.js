var player = []
var platforms = []
var canJump = true

function setup() {
    createCanvas(1000, 500)

    var b = new Player()
    player.push(b)

    var c = new Platform(100, 500, 50, -25)
    platforms.push(c)
}

function draw() {
    background(0)

    player[0].show()
    player[0].edges()
    player[0].move()
    player[0].collide()
    platforms[0].show()
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
    }
    edges() {
        if (this.pos.x < 0) {this.pos.x = 0}
        if (this.pos.x > 1000 - this.radius) {this.pos.x = 1000 - this.radius}
    }
    show() {
        noStroke()
        fill(255)
        rect(this.pos.x, this.pos.y, this.size, 0-this.size)
    }
    collide() {
        for(var i = 0; i < platforms.length; i ++)
        {
            if (this.pos.x <= platforms[i].pos1.x + platforms[i].pos2.x &&
                this.pos.x + this.size >= platforms[i].pos1.x &&
                this.pos.y >= platforms[i].pos1.y + platforms[i].pos2.y &&
                this.pos.y - this.size <= platforms[i].pos1.y)
                {
                    if (keyIsDown(65)) {
                        console.log("right")
                    } else if (keyIsDown(68)) {
                        console.log("left")
                    }
                    if (this.below >= platforms[i].pos1.y-platforms[1].pos2.y) {
                        console.log("up")
                    }
                }
        }
        }
    move() {
        if (keyIsDown(68)){this.pos.x += 5}
        if (keyIsDown(65)){this.pos.x-=5}
    }
    jump() {
        if (canJump) {
            canJump = false
            this.pos.y -= 50
            setTimeout(() => {this.pos.y += 50; canJump = true}, 500);
        }
    }
}

function keyPressed() {
    if (key == " ") {player[0].jump()}
}