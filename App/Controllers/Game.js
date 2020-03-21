var score = 0;
var highScore = 0;
var mouseX = 0;
var mouseY = 0;
var ShipX = 10;
var ShipY = 500;
var difficulty = 600;
var lasers = [];
var enemies = [];
var lives =[];
var pause = true;
var bool = true;

canvas.addEventListener("mousemove", function(e) 
{ 
    if(!pause){
        getMousePosition(canvas, e); 
    }
}); 

canvas.addEventListener("mousedown", function(e) 
{ 
    if(!pause){
        fireLaser(); 
    }
}); 

$('#Pause').on('click', function(){
    if(pause){
        pause = false;
        $('#Menu').hide();
        $('#score').text('Score: ' + score);
        newEnemy();
        lives = [
            {
                img: '/GameObjects/Images/tom.png',
                X: 100,
                name: 'Tom'
            },
            {
                img: '/GameObjects/Images/hillary.png',
                X: 200,
                name: 'Hillary'
            },
            {
                img: '/GameObjects/Images/bernie.png',
                X: 300,
                name: 'Bernie'
            },
            {
                img: '/GameObjects/Images/joe.png',
                X: 400,
                name: 'Joe'
            },
        ];
        $('#myCanvas').addClass('hide_cursor');
    }else{
        pause = true;
        
    }
    
})

var buildlives = function(){
    ctx.clearRect(0,0,600,75);
    for(let i = 0; i < lives.length; i++){
        let img = document.createElement('img');
        img.src = lives[i].img;

        ctx.beginPath();
        ctx.arc(lives[i].X + 20 , 40,30,0,2*Math.PI);
        ctx.stroke();
        
        ctx.beginPath();        
        ctx.drawImage(img, lives[i].X, 20, 40, 40);        
        ctx.fill();
        ctx.closePath();
    }
};

var getMousePosition = function(canvas, event) { 
    let rect = canvas.getBoundingClientRect(); 
    ShipY = event.clientY - rect.top - 25; 
    
    if (ShipY > canvas.height - 50){
        ShipY = canvas.height - 50;
    }
    else if(ShipY < 75){
        ShipY = 75;
    }
    updateShip();
} 

var updateShip = function(){

    ctx.clearRect(ShipX, ShipY - 1000, 60, 2000);
    Ship(
        params = {
            posX: ShipX,
            posY: ShipY
        }
    )    
};

var fireLaser = function(){
    var gunChoice;
    if(bool){
        bool = false;
        gunChoice = 13;   
    }
    else{
        bool = true;
        gunChoice = 40; 
    }
    
    var laser = { X: ShipX + 55, Y: ShipY + gunChoice, bool: bool};
    new Laser(laser);
    lasers.push(laser);
};

var moveLasers = function(){
    
    for(let i = 0; i < lasers.length; i ++){            
        
        ctx.clearRect(lasers[i].X, lasers[i].Y, 40, 15);
        lasers[i].X += 20;
        if(lasers[i].X > canvas.width){
            lasers.splice(i,1);
        }
        new Laser(lasers[i]);           
    }    
};

var newEnemy = function(){
    if(!pause){
        var enemy = 
        {   
            X: 1000, 
            Y: Math.floor(Math.random() * 450) + 75
        }
        buildEnemy(enemy);
        enemies.push(enemy);

        setTimeout(newEnemy, difficulty);
    }    
};

var buildEnemy = function(enemy){
    new Enemy(enemy);
};

var updateEnemies = function(){
    for(let i = 0; i < enemies.length; i++){
        ctx.clearRect(enemies[i].X, enemies[i].Y, 50, 50);
        if(enemies[i].X < 70){
            enemies.splice(i,1);
            if(lives.length > 1){
                lives.splice(lives.length - 1, 1);
            }
            else{
                lives.splice(lives.length - 1, 1);
                gameOver();
            }
            
        }
        else{        
            enemies[i].X -= 5;
            buildEnemy(enemies[i]);
        }
    }

};

var checkForDestruction = function(){
    if(enemies.length > 0 && lasers.length > 0){
        for(let i = 0; i < enemies.length; i++){
            for(let j = 0; j < lasers.length; j++){
                if(lasers[j].X >= enemies[i].X && lasers[j].X <= enemies[i].X + 50 && lasers[j].Y + 10 >= enemies[i].Y && lasers[j].Y <= enemies[i].Y + 50){
                    ctx.clearRect(enemies[i].X, enemies[i].Y, 50, 50);
                    ctx.clearRect(lasers[j].X, lasers[j].Y, 40, 15);
                    enemies.splice(i,1);
                    lasers.splice(j,1);
                    addScore();
                }
            }
        }
    }
};

var update = function(){    
    if(!pause){
        checkForDestruction();
        moveLasers();
        updateEnemies();
        buildlives();
   }     
};

var addScore = function(){
    score += 1;
    if(score > highScore){
        highScore = score;
    }
    difficulty -= 5;

    if(difficulty < 200){
        difficulty = 200;
    }
    $('#score').text('Score: ' + score);
    $('#highscore').text('High Score: ' + highScore);

}

var gameOver = function(){  
    ctx.clearRect(75,75,1000, 1000); 
    enemies = [];
    lasers = [];
    score = 0;
    difficulty = 600;
    pause = true;
    $('#Menu').show();
    $('#myCanvas').removeClass('hide_cursor');
}

setInterval(update, 30);

