var player = []
var platforms = []
var dynamicPlatforms = []
var canJump = true
var momentum = 0
var tempPos = 500
var needFloat = false
var standard = -1
var timer = 0
var onPlatform = false

function setup() {
    createCanvas(1000, 500)

    var a = new Player()
    player.push(a)

    var b = new Platform(100, 500, 50, -50)
    platforms.push(b)

    var b = new Platform(200, 450, 50, -100)
    platforms.push(b)

    var c = new DynamicPlatform(400, 500, 100, -25)
    dynamicPlatforms.push(c)
    
}

function draw() {
    background(0)

    player[0].show()
    player[0].edges()
    player[0].gravity()
    player[0].move()
    player[0].hasMomentum()
    player[0].float()
    for(var y = 0; y < platforms.length; y++){
        platforms[y].show()
        platforms[y].collide()
    }
    for(var z = 0; z < dynamicPlatforms.length; z++){
        dynamicPlatforms[z].show()
        dynamicPlatforms[z].work()
        dynamicPlatforms[z].collide()
    }
    console.log(player[0].pos.y)

    if (player[0].pos.y + player[0].height < 0 || player[0].pos.y > 500) {player[0].death()}
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

    collide() {
        if (player[0].pos.x <= this.pos1.x + this.pos2.x &&
            player[0].pos.x + player[0].size >= this.pos1.x &&
            player[0].pos.y >= this.pos1.y + this.pos2.y &&
            player[0].pos.y - player[0].size <= this.pos1.y)
            {
                //checks for top collision
                if (player[0].pos.y < this.pos1.y + (this.pos2.y / 2) &&
                    player[0].pos.x < this.pos1.x + this.pos2.x -1 &&
                    player[0].pos.x + player[0].size > this.pos1.x + 1) {
                    player[0].pos.y = this.pos1.y + this.pos2.y
                }
                //checks for right collision
                if (player[0].pos.y > this.pos1.y + this.pos2.y && 
                    player[0].pos.x > this.pos1.x + (this.pos2.x / 2) &&
                    player[0].pos.y - player[0].size < this.pos1.y){  
                        player[0].pos.x = this.pos1.x + this.pos2.x
                }
                //checks for left collision
                if (player[0].pos.y > this.pos1.y + this.pos2.y && 
                    player[0].pos.x < this.pos1.x + (this.pos2.x / 2) &&
                    player[0].pos.y - player[0].size < this.pos1.y) {
                        player[0].pos.x = this.pos1.x - player[0].size
                }
                //checks for bottom collision
                if (player[0].pos.y > this.pos1.y && 
                    player[0].pos.x < this.pos1.x + this.pos2.x &&
                    player[0].pos.x + player[0].size > this.pos1.x) {
                    needFloat = false
                    }
                }
    }
}

class DynamicPlatform {
    constructor(x, y, h, w) {
        this.pos1 = createVector(x, y)
        this.pos2 = createVector(h, w)
    }

    show() {
        noStroke()
        fill(255)
        rect(this.pos1.x, this.pos1.y, this.pos2.x, this.pos2.y)
    }

    work() {
        this.pos1.y += standard
        if (timer / 360 == 1) {
            standard *= -1
            timer = 0}
        timer += 3
        }

    collide() {
        if (player[0].pos.x <= this.pos1.x + this.pos2.x &&
            player[0].pos.x + player[0].size >= this.pos1.x &&
            player[0].pos.y >= this.pos1.y + this.pos2.y &&
            player[0].pos.y - player[0].size <= this.pos1.y)
            {
                // checks for top collision 
                if (player[0].pos.y < this.pos1.y + (this.pos2.y / 2) &&
                    player[0].pos.x < this.pos1.x + this.pos2.x &&
                    player[0].pos.x + player[0].size > this.pos1.x) {
                    player[0].pos.y = this.pos1.y + this.pos2.y
                    onPlatform = true
                } 
                // checks for right collision 
                if (player[0].pos.y > this.pos1.y + this.pos2.y && 
                    player[0].pos.x > this.pos1.x + (this.pos2.x / 2) &&
                    player[0].pos.y - player[0].size < this.pos1.y){  
                        player[0].pos.x = this.pos1.x + this.pos2.x
                } 
                // checks for left collision 
                if (player[0].pos.y > this.pos1.y + this.pos2.y && 
                    player[0].pos.x < this.pos1.x + (this.pos2.x / 2) &&
                    player[0].pos.y - player[0].size < this.pos1.y) {
                        player[0].pos.x = this.pos1.x - player[0].size
                        onPlatform = true
                } 
                // checks for bottom collision
                if (player[0].pos.y > this.pos1.y && 
                    player[0].pos.x < this.pos1.x + this.pos2.x &&
                    player[0].pos.x + player[0].size > this.pos1.x) {
                    if (player[0].pos.y == 500) {player[0].death()}
                    }
                }
        }
}

class Player {
    constructor() {
        this.size = 25
        this.pos = createVector(10, 500)
        this.vel = 0
        this.below = this.pos.y + 1
        this.above = this.pos.y - this.size
        this.left = this.pos.x - 1
        this.right = this.pos.x + this.size + 1
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
    
    move() {
        if (keyIsDown(68)) {
                this.pos.x += 5
            }
        if (keyIsDown(65)) {
                this.pos.x -= 5
            }
    }

    jump() {
        if (momentum == 0 || onPlatform) {
            needFloat = true
            onPlatform = false
            setTimeout(() => {needFloat = false;}, 250);
        }
    }

    gravity() {
        this.pos.y += 5
    }

    hasMomentum() {
        momentum = tempPos - this.pos.y
        tempPos = this.pos.y
    }

    float() {
        if (needFloat == true) {
            this.pos.y -= 10
        }
    }

    death() {
        console.log("died lol")
        //TODO GAME OVER
    }
}

function keyPressed() {
    if (key == " ") {player[0].jump()}
}