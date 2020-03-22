var trumpSound = new sound('/GameObjects/Sounds/trump.mov');
var shipX = -50;
var shipY = 10;

var buildShip = function(){
    Ship(
        params = {
            posX: shipX,
            posY: shipY
        }
    )    
}

var buildEnemy = function(){
    new Enemy(enemy = {
            X: shipX + 100,
            Y: shipY + 10
        }
    );
}

var moveShip = function(){
    ctx.clearRect(shipX, shipY, 60, 60);
    ctx.clearRect(shipX + 100, shipY + 10, 50, 50);
    if(shipX < 1000){
        shipX += 10;
    }
    else if (shipY < 800){
        shipY += 70
        shipX = -50;
    }        
    else{
        shipY = 10;
        shipX = -50;
    }
    buildShip();
    buildEnemy();
}

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }    
}

setInterval(moveShip, 50);