//This WAS my testing page... but now its just the program!
var player = 0
var platforms = []
var dynamicPlatforms = []
var killBoxs = []
var levels = 0
var completedLevels = []
var exit = 0
var canJump = true
var momentum = 0
var tempPos = 500
var needFloat = false
var onPlatform = false
var levelNumber = 0
var volume = 3
var currentLevel = "none"
var jumpAdd = 0

function setup() {
    createCanvas(1000, 500)

    levels = new Level()
    player = new Player()
    levels.levelGen("dev")
}

function draw() {
    background(0)

    levels.showVolume()
    levels.render()
}

class Exit {
    constructor(x=0, y=0) {
        this.pos = createVector(x, y)
    }
    show() {
        noStroke()
        fill(41, 19, 209)
        rect(this.pos.x, this.pos.y, 35, -55)
        fill(209, 158, 19)
        rect(this.pos.x, this.pos.y, 2.5, -55)
        rect(this.pos.x+2.5,this.pos.y-52.5,32.5,-2.5)
        rect(this.pos.x+32.5,this.pos.y,2.5,-52.5)
        stroke(255)
        fill(0)
        strokeWeight(2)
        ellipse(this.pos.x + 17.25, this.pos.y - 70, 20, 20)
        noStroke()
        fill(255)
        textAlign(CENTER)
        textSize(12)
        text(levelNumber, this.pos.x + 17.25, this.pos.y - 65.5)
    }

}

class Platform {
    constructor(x, y, w, h) {
        this.pos1 = createVector(x, y)
        this.pos2 = createVector(w, h)
        this.R = 255
        this.G = 255
        this.B = 255
        this.chosenColor = 0
    }

    show() {
        noStroke()
        fill(this.R, this.G, this.B)
        rect(this.pos1.x, this.pos1.y, this.pos2.x, this.pos2.y)
    }

    intensity() {
        if (volume == 1) {
            if (this.chosenColor == 0) {
                this.R = 15
                this.G = 46
                this.B = 21
            } else if (this.chosenColor == 1) {
                this.R = 18
                this.G = 50
                this.B = 51
            } else {
                this.R = 43
                this.G = 10
                this.B = 39
            }
        } else if (volume == 2) {
            if (this.chosenColor == 0) {
                this.R = 24
                this.G = 89
                this.B = 37
            } else if (this.chosenColor == 1) {
                this.R = 24
                this.G = 101
                this.B = 102
            } else {
                this.R = 97
                this.G = 21
                this.B = 88
            }
        } else if (volume == 3) {
            if (this.chosenColor == 0) {
                this.R = 30
                this.G = 158
                this.B = 56
            } else if (this.chosenColor == 1) {
                this.R = 30
                this.G = 153
                this.B = 156
            } else {
                this.R = 143
                this.G = 24
                this.B = 129
            }
        } else if (volume == 4) {
            if (this.chosenColor == 0) {
                this.R = 18
                this.G = 199
                this.B = 54
            } else if (this.chosenColor == 1) {
                this.R = 18
                this.G = 196
                this.B = 199
            } else {
                this.R = 207
                this.G = 14
                this.B = 184
            }
        } else if (volume == 5) {
            if (this.chosenColor == 0) {
                this.R = 5
                this.G = 247
                this.B = 53
            } else if (this.chosenColor == 1) {
                this.R = 0
                this.G = 251
                this.B = 255
            } else {
                this.R = 255
                this.G = 0
                this.B = 255
            }
        }
    }

    collide() {
        if (player.pos.x <= this.pos1.x + this.pos2.x &&
            player.pos.x + player.size >= this.pos1.x &&
            player.pos.y >= this.pos1.y + this.pos2.y &&
            player.pos.y - player.size <= this.pos1.y)
            {
                //checks for right collision
                if (player.pos.y > this.pos1.y + this.pos2.y + 5 && 
                    player.pos.x > this.pos1.x + (this.pos2.x / 2) &&
                    player.pos.y - player.size < this.pos1.y){  
                        player.pos.x = this.pos1.x + this.pos2.x
                }
                //checks for left collision
                if (player.pos.y > this.pos1.y + this.pos2.y + 5 && 
                    player.pos.x < this.pos1.x + (this.pos2.x / 2) &&
                    player.pos.y - player.size < this.pos1.y) {
                        player.pos.x = this.pos1.x - player.size
                }
                //checks for bottom collision
                if (player.pos.y > this.pos1.y && 
                    player.pos.x < this.pos1.x + this.pos2.x &&
                    player.pos.x + player.size > this.pos1.x) {
                        needFloat = false
                }
                //checks for top collision
                if (player.pos.y < this.pos1.y + (this.pos2.y / 2) &&
                    player.pos.x < this.pos1.x + this.pos2.x &&
                    player.pos.x + player.size > this.pos1.x) {
                    player.pos.y = this.pos1.y + this.pos2.y
                }
        }
    }

    color() {
        this.chosenColor = Math.floor(Math.random()*3)
        console.log(this.chosenColor)
    }
}

class DynamicPlatform {
    constructor(x, y, w, h, up=0, down=500) {
        this.pos1 = createVector(x, y)
        this.pos2 = createVector(w, h)
        this.movement = -3
        this.R = 255
        this.G = 255
        this.B = 255
        this.chosenColor = 0
        this.upperBound = up - h
        this.lowerBound = down
    }

    show() {
        noStroke()
        fill(this.R, this.G, this.B)
        rect(this.pos1.x, this.pos1.y, this.pos2.x, this.pos2.y)
    }

    work() {
        this.pos1.y += this.movement
        if (this.pos1.y <= this.upperBound  || this.pos1.y >= this.lowerBound) {
            this.movement *= -1
        }
    }

    collide() {
        if (player.pos.x <= this.pos1.x + this.pos2.x &&
            player.pos.x + player.size >= this.pos1.x &&
            player.pos.y >= this.pos1.y + this.pos2.y &&
            player.pos.y - player.size <= this.pos1.y)
            {
                // checks for bottom collision
                if (player.pos.y - player.size < this.pos1.y && 
                    player.pos.x < this.pos1.x + this.pos2.x &&
                    player.pos.x - player.size > this.pos1.x) {
                    needFloat = false
                    if (player.pos.y == 500 && this.movement > 0) {player.death()}
                    }
                //checks for left collision
                if (player.pos.y - (5 + Math.abs(this.movement)) > this.pos1.y + this.pos2.y && 
                    player.pos.x < this.pos1.x + (this.pos2.x / 2) &&
                    player.pos.y - player.size + (Math.abs(this.movement)) < this.pos1.y){
                        player.pos.x = this.pos1.x - player.size
                }
                //checks for right collision
                if (player.pos.y - (5 + Math.abs(this.movement)) > this.pos1.y + this.pos2.y && 
                    player.pos.x > this.pos1.x + (this.pos2.x / 2) &&
                    player.pos.y - player.size + (Math.abs(this.movement)) < this.pos1.y){  
                        player.pos.x = this.pos1.x + this.pos2.x
                }
                //checks for top collision
                if (player.pos.y < this.pos1.y + (this.pos2.y / 2) &&
                    player.pos.x < this.pos1.x + this.pos2.x &&
                    player.pos.x + player.size > this.pos1.x) {
                    player.pos.y = this.pos1.y + this.pos2.y
                    onPlatform = true
                    console.log("onPlatform")
                    jumpAdd = Math.abs(this.movement)
                }
            } else {onPlatform = false}
        }
    
    color() {
        this.chosenColor = Math.floor(Math.random()*3)
        console.log(this.chosenColor)
    }

    intensity() {
        if (volume == 1) {
            if (this.chosenColor == 0) {
                this.R = 15
                this.G = 46
                this.B = 21
            } else if (this.chosenColor == 1) {
                this.R = 18
                this.G = 50
                this.B = 51
            } else {
                this.R = 43
                this.G = 10
                this.B = 39
            }
            if (this.movement < 0) {this.movement = -1} else {this.movement = 1}
        } else if (volume == 2) {
            if (this.chosenColor == 0) {
                this.R = 24
                this.G = 89
                this.B = 37
            } else if (this.chosenColor == 1) {
                this.R = 24
                this.G = 101
                this.B = 102
            } else {
                this.R = 97
                this.G = 21
                this.B = 88
            }
            if (this.movement < 0) {this.movement = -2} else {this.movement = 2}
        } else if (volume == 3) {
            if (this.chosenColor == 0) {
                this.R = 30
                this.G = 158
                this.B = 56
            } else if (this.chosenColor == 1) {
                this.R = 30
                this.G = 153
                this.B = 156
            } else {
                this.R = 143
                this.G = 24
                this.B = 129
            }
            if (this.movement < 0) {this.movement = -3} else {this.movement = 3}
        } else if (volume == 4) {
            if (this.chosenColor == 0) {
                this.R = 18
                this.G = 199
                this.B = 54
            } else if (this.chosenColor == 1) {
                this.R = 18
                this.G = 196
                this.B = 199
            } else {
                this.R = 207
                this.G = 14
                this.B = 184
            }
            if (this.movement < 0) {this.movement = -4} else {this.movement = 4}
        } else if (volume == 5) {
            if (this.chosenColor == 0) {
                this.R = 5
                this.G = 247
                this.B = 53
            } else if (this.chosenColor == 1) {
                this.R = 0
                this.G = 251
                this.B = 255
            } else {
                this.R = 255
                this.G = 0
                this.B = 255
            }
            if (this.movement < 0) {this.movement = -5} else {this.movement = 5}
        }
    }
}

class Player {
    constructor() {
        this.size = 25
        this.pos = createVector(10, 500)
        this.vel = 0
    }
    
    edges() {
        if (this.pos.x < 0) {this.pos.x = 0}
        if (this.pos.x > 1000 - this.size) {this.pos.x = 1000 - this.size}
        if (this.pos.y >= 500) {this.pos.y = 495}
        if (this.pos.y <= 25) {needFloat = false}
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
            console.log("jumped")
            setTimeout(() => {needFloat = false;}, 250);
        }
    }

    gravity() {
        this.pos.y += 5
    }

    hasMomentum() {
        momentum = tempPos - this.pos.y
        tempPos = this.pos.y
        if (momentum == 0) {jumpAdd = 0}
    }

    float() {
        if (needFloat == true) {
            console.log("floating")
            needFloat = true
            this.pos.y -= (10 + jumpAdd)
        }
    }

    death() {
        console.log("died lol")
        //TODO GAME OVER
    }

    volControll() {
        if (volume > 5) {volume = 5}
        if (volume < 1) {volume = 1}
    }
}

class Level {
    constructor() {}
    
    reset(){
        platforms = []
        dynamicPlatforms = []
        exit = 0
        killBoxs = []
    }
    levelGen(level) {
        levelNumber = level
        if (level == "dev") {
            var a = new Platform(100, 500, 50, -50)
            platforms.push(a)

            var a = new Platform(200, 450, 50, -100)
            platforms.push(a)

            var a = new DynamicPlatform(400, 500, 100, -25, 25, 500)
            dynamicPlatforms.push(a)

            dynamicPlatforms[0].color()
            for(var y1 = 0; y1 < platforms.length; y1 ++){
                platforms[y1].color()
            }
            exit = new Exit(900, 500)
            player.pos.x = 10
            player.pos.y = 500
        }
    }

    render() {
        for(var y = 0; y < platforms.length; y++){
            platforms[y].show()
            platforms[y].collide()
            platforms[y].intensity()
        }
        for(var y = 0; y < dynamicPlatforms.length; y++){
            dynamicPlatforms[y].show()
            dynamicPlatforms[y].work()
            dynamicPlatforms[y].collide()
            dynamicPlatforms[y].intensity()
        }

        exit.show()
        player.show()
        player.edges()
        player.gravity()
        player.move()
        player.hasMomentum()
        player.float()
        player.volControll()
    }

    showVolume() {
        fill(255)
        noStroke()
        textSize(20)
        textAlign(LEFT)
        text("Volume: "+volume, 5, 25)
    }
}

function keyPressed() {
    if (key == " ") {player.jump(); console.log("space key pressed")}
    if (key == "q") {volume --}
    if (key == "e") {volume ++}
} 