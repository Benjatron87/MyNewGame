var Enemy = function(enemy){

    let enemyImg = document.createElement('img');
    enemyImg.src = 'GameObjects/Images/virusImg.png';

    ctx.beginPath();
    ctx.drawImage(enemyImg, enemy.X, enemy.Y, 50, 50);
    ctx.fill();
    ctx.closePath();
};
