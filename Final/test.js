var player = []
var platforms = []

function setup() {
    createCanvas(1000, 500)

    var b = new Player()
    player.push(b)

    var c = new Platform(100, 400, 50, -25)
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
        let x2 = x+w
        let y2 = y+h
        this.pos2 = createVector(x2, y2)
    }
    show() {
        noStroke()
        fill(255)
        rect(this.pos1.x, this.pos1.y, this.pos2.x, this.pos2.y)
    }
}

class Player {
    constructor() {
        this.radius = 10
        this.pos = createVector(10, 490)
        this.vel = 0
    }
    edges() {
        if (this.pos.x < this.radius) {this.pos.x = this.radius}
        if (this.pos.x > 1000 - this.radius) {this.pos.x = 1000 - this.radius}
    }
    show() {
        noStroke()
        fill(255)
        ellipse(this.pos.x, this.pos.y, this.radius*2)
    }
    collide() {
        for(var i = 0; i <= platforms.length; i ++)
        {
            if (this.pos.y + this.radius >= platforms[i].pos2.y &&
                this.pos.y - this.radius <= platforms[i].pos1.y &&
                this.pos.x + this.radius >= platforms[i].pos1.x &&
                this.pos.x - this.radius <= platforms[i].pos2.x)
                {
                    console.log("colliding")
                }
        }
        }
    move() {
        if (keyIsDown(68)){this.pos.x += 5}
        else if (keyIsDown(65)){this.pos.x-=5}
    }
    jump() {
        console.log()
    }
}

function keyPressed() {
    if (key == " ") {player[0].jump()}
}