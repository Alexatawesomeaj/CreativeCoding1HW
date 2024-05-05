//This WAS my testing page... but now its just the program!
//Object storage
var player = []
var platforms = []
var dynamicPlatforms = []
var killBoxs = []
var levels = []
var completedLevels = []
var exits = []
var buttons = []

//Player Variables
var canJump = true
var momentum = 0
var tempPos = 500
var needFloat = false
var onPlatform = false
var levelNumber = 0
var volume = 3
var currentLevel = "None"
var jumpAdd = 0
var needMove = true

function setup() {
    createCanvas(1000, 500)

    levels = new Level()
    levels.levelGen("None")
}

function draw() {
    background(0)

    levels.showVolume()
    levels.render()
}

class Level {
    constructor() {}
    
    reset(){
        player = []
        platforms = []
        dynamicPlatforms = []
        killBoxs = []
        exits = []
        buttons = []
    }

    levelGen(level) {
        currentLevel = level
        if (level == "dev") {
            var a = new Platform(100, 500, 50, -50)
            platforms.push(a)

            var a = new Platform(200, 450, 50, -100)
            platforms.push(a)

            var a = new DynamicPlatform(400, 500, 100, -25, 25, 500)
            dynamicPlatforms.push(a)

            var a = new KillBox(0, 400, 10, -350)
            killBoxs.push(a)

            dynamicPlatforms[0].color()
            for(var y1 = 0; y1 < platforms.length; y1 ++){
                platforms[y1].color()
            }

            var a = new Exit(900, 500)
            exits.push(a)

            var a = new Player
            player.push(a)

            player[0].pos.x = 10
            player[0].pos.y = 500
        }
        if (level == "1"){
            a = new Exit(900, 300)
            exits.push(a)

            a = new Player()
            player.push(a)

            player[0].pos.x = 10
            player[0].pos.y = 300

            a = new KillBox(0, 500, 1000, -5)
            killBoxs.push(a)

            a = new Platform(0, 500, 100, -200)
            platforms.push(a)

            a = new Platform(200, 500, 100, -225)
            platforms.push(a)

            a = new Platform(450, 500, 100, -150)
            platforms.push(a)

            a = new Platform(600, 500, 50, -200)
            platforms.push(a)

            a = new Platform(800, 500, 50, -200)
            platforms.push(a)

            a = new Platform(850, 350, 150, -50)
            platforms.push(a)

            for(var y = 0; y < platforms.length; y++) {
                platforms[y].color()
            }
        }

        if (level == "2"){
            a = new Player()
            player.push(a)

            a = new Exit(950, 500)
            exits.push(a)

            a = new Platform(900, 500, 25, -300)
            platforms.push(a)

            a = new DynamicPlatform(850, 500, 50, -25, 350, 500)
            dynamicPlatforms.push(a)

            a = new Platform(750, 150, 250, -150)
            platforms.push(a)

            a = new Platform(0, 450, 50, -25)
            platforms.push(a)

            a = new Platform(0, 370, 50, -25)
            platforms.push(a)

            a = new Platform(0, 290, 50, -25)
            platforms.push(a)

            a = new Platform(0, 210, 50, -25)
            platforms.push(a)

            a = new Platform(0, 130, 50, -25)
            platforms.push(a)

            a = new Platform(100, 500, 25, -425)
            platforms.push(a)

            //Poles
            a = new Platform(150, 475, 50, -475)
            platforms.push(a)

            a = new Platform(250, 475, 50, -475)
            platforms.push(a)

            a = new Platform(350, 475, 50, -475)
            platforms.push(a)

            a = new Platform(450, 475, 50, -475)
            platforms.push(a)

            a = new Platform(550, 475, 50, -475)
            platforms.push(a)

            a = new Platform(650, 475, 50, -475)
            platforms.push(a)

            a = new Platform(750, 475, 50, -475)
            platforms.push(a)

            //moving platforms
            a = new DynamicPlatform(200, 475, 50, -500, 400, 500, -72)
            dynamicPlatforms.push(a)

            a = new DynamicPlatform(300, 475, 50, -500, 400, 500, -72)
            dynamicPlatforms.push(a)

            a = new DynamicPlatform(400, 475, 50, -500, 400, 500, -72)
            dynamicPlatforms.push(a)

            a = new DynamicPlatform(500, 475, 50, -500, 400, 500, -72)
            dynamicPlatforms.push(a)

            a = new DynamicPlatform(600, 475, 50, -500, 400, 500, -72)
            dynamicPlatforms.push(a)

            a = new DynamicPlatform(700, 475, 50, -500, 400, 500, -72)
            dynamicPlatforms.push(a)
        }

        if (level == "None") {
            a = new Button(125, 200, 1, true)
            buttons.push(a)

            a = new Button(275, 200, 2, true)
            buttons.push(a)

            a = new Button(425, 200, 3, true)
            buttons.push(a)

            a = new Button(575, 200, 4, true)
            buttons.push(a)

            a = new Button(725, 200, 5, true)
            buttons.push(a)

            a = new Button(425, 300, "dev", true)
            buttons.push(a)
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

        for(var y = 0; y < killBoxs.length; y++){
            killBoxs[y].show()
            killBoxs[y].collide()
        }

        for(var y = 0; y < player.length; y++){
            player[y].show()
            player[y].edges()
            player[y].gravity()
            player[y].move()
            player[y].hasMomentum()
            player[y].float()
            player[y].volControll()
        }

        for(var y = 0; y < exits.length; y++){
            exits[y].show()
            exits[y].collide()
        }

        for(var y = 0; y < buttons.length; y++) {
            buttons[y].show()
            buttons[y].clicked()
        }

    }

    showVolume() {
        if(currentLevel != "None") {
            fill(255)
            noStroke()
            textSize(20)
            textAlign(LEFT)
            text("Speed: "+volume, 5, 25)
        }
    }
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

    collide() {
        if (player[0].pos.x <= this.pos.x + 35 &&
            player[0].pos.x + player[0].size >= this.pos.x &&
            player[0].pos.y >= this.pos.y - 55 &&
            player[0].pos.y - player[0].size <= this.pos.y)
            {
                let seen = true
                if (currentLevel != "dev") {
                    for (var y = 0; y < completedLevels.length; y++) {
                        if (completedLevels[y] == currentLevel) {seen = false}
                    }
                    if (seen) {completedLevels.push(currentLevel)}
                }
                levels.reset()
                levels.levelGen("None")
        }

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
        if (player[0].pos.x <= this.pos1.x + this.pos2.x &&
            player[0].pos.x + player[0].size >= this.pos1.x &&
            player[0].pos.y >= this.pos1.y + this.pos2.y &&
            player[0].pos.y - player[0].size <= this.pos1.y)
            {
                //checks for right collision
                if (player[0].pos.y > this.pos1.y + this.pos2.y + 5 && 
                    player[0].pos.x > this.pos1.x + (this.pos2.x / 2) &&
                    player[0].pos.y - player[0].size < this.pos1.y){  
                        player[0].pos.x = this.pos1.x + this.pos2.x
                }
                //checks for left collision
                if (player[0].pos.y > this.pos1.y + this.pos2.y + 5 && 
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
                //checks for top collision
                if (player[0].pos.y < this.pos1.y + (this.pos2.y / 2) &&
                    player[0].pos.x < this.pos1.x + this.pos2.x &&
                    player[0].pos.x + player[0].size > this.pos1.x) {
                    player[0].pos.y = this.pos1.y + this.pos2.y
                }
        }
    }

    color() {
        this.chosenColor = Math.floor(Math.random()*3)
    }
}

class DynamicPlatform {
    constructor(x, y, w, h, up=0, down=500, speed=-3) {
        this.pos1 = createVector(x, y)
        this.pos2 = createVector(w, h)
        this.movement = speed
        this.R = 255
        this.G = 255
        this.B = 255
        this.chosenColor = 0
        this.upperBound = up
        this.lowerBound = down
    }

    show() {
        noStroke()
        fill(this.R, this.G, this.B)
        rect(this.pos1.x, this.pos1.y, this.pos2.x, this.pos2.y)
    }

    work() {
        this.pos1.y += this.movement
        if (this.pos1.y <= this.upperBound || this.pos1.y >= this.lowerBound){
            this.movement *= -1
        }
    }

    collide() {
        if (player[0].pos.x <= this.pos1.x + this.pos2.x &&
            player[0].pos.x + player[0].size >= this.pos1.x &&
            player[0].pos.y >= this.pos1.y + this.pos2.y &&
            player[0].pos.y - player[0].size <= this.pos1.y)
            {
                // checks for bottom collision
                if (player[0].pos.y > this.pos1.y && 
                    player[0].pos.x < this.pos1.x + this.pos2.x &&
                    player[0].pos.x + player[0].size > this.pos1.x) {
                    needFloat = false
                    }
                //checks for left collision
                if (player[0].pos.y - (5 + Math.abs(this.movement)) > this.pos1.y + this.pos2.y && 
                    player[0].pos.x < this.pos1.x + (this.pos2.x / 2) &&
                    player[0].pos.y - player[0].size + (Math.abs(this.movement)) < this.pos1.y){
                        player[0].pos.x = this.pos1.x - player[0].size
                }
                //checks for right collision
                if (player[0].pos.y - (5 + Math.abs(this.movement)) > this.pos1.y + this.pos2.y && 
                    player[0].pos.x > this.pos1.x + (this.pos2.x / 2) &&
                    player[0].pos.y - player[0].size + (Math.abs(this.movement)) < this.pos1.y){  
                        player[0].pos.x = this.pos1.x + this.pos2.x
                }
                //checks for top collision
                if (player[0].pos.y < this.pos1.y + (this.pos2.y / 2) &&
                    player[0].pos.x < this.pos1.x + this.pos2.x &&
                    player[0].pos.x + player[0].size > this.pos1.x) {
                    player[0].pos.y = this.pos1.y + this.pos2.y
                    onPlatform = true
                    jumpAdd = this.movement
                }
            } else {onPlatform = false}
        }
    
    color() {
        this.chosenColor = Math.floor(Math.random()*3)
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
            needFloat = true
            this.pos.y -= (10 - jumpAdd)
        }
    }

    death() {
        console.log("died lol")
        levels.reset()
        levels.levelGen("None")
    }

    volControll() {
        if (volume > 5) {volume = 5}
        if (volume < 1) {volume = 1}
    }
}

class KillBox {
    constructor(x, y, w, h) {
        this.pos1 = createVector(x, y)
        this.pos2 = createVector(w, h)
    }

    show() {
        noStroke()
        fill(255, 0, 0)
        rect(this.pos1.x, this.pos1.y, this.pos2.x, this.pos2.y)
    }

    collide() {
        if (player[0].pos.x <= this.pos1.x + this.pos2.x &&
            player[0].pos.x + player[0].size >= this.pos1.x &&
            player[0].pos.y >= this.pos1.y + this.pos2.y &&
            player[0].pos.y - player[0].size <= this.pos1.y){
                player[0].death()
            } 
    }
}

class Button {
    constructor(x, y, number, avaliable=true) {
        this.pos = createVector(x, y)
        this.text = String(number)
        this.avaliable = avaliable
    }

    show() {
        stroke(255)
        strokeWeight(5)
        fill(0)
        rect(this.pos.x, this.pos.y, 100, -60)
        
        
        textAlign(CENTER)
        textSize(30)
        noStroke()
        fill(255)
        text(this.text, this.pos.x+49, this.pos.y-19)

    }
    
    clicked() {
        if (mouseIsPressed && mouseButton == "left") {
            if (mouseX >= this.pos.x &&
                mouseX <= this.pos.x + 100 &&
                mouseY >= this.pos.y - 60 &&
                mouseY <= this.pos.y) {
                    console.log(this.text)
                    levels.reset()
                    levels.levelGen(this.text)
                }
        }
    }

}

function keyPressed() {
    if (key == " ") {player[0].jump()}
    if (key == "q") {volume --}
    if (key == "e") {volume ++}
    if (key == "r") {
        levels.reset()
        levels.levelGen("None")
    }
}