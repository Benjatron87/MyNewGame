var Laser = function(laser){
    if(laser){       

        let laserImg = document.createElement('img');
        laserImg.src = 'GameObjects/Images/laserImg.png';

        ctx.beginPath();
        ctx.drawImage(laserImg, laser.X, laser.Y, 40, 15);
        ctx.fill();
        ctx.closePath();
    }
} 