var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var Ship = function(params){

    var posX = params.posX;
    var posY = params.posY;
    let shipImg = document.createElement('img');
    shipImg.src = 'GameObjects/Images/shipImg.png';

    ctx.beginPath();
    ctx.drawImage(shipImg, posX, posY, 60, 60);
    ctx.fill();
    ctx.closePath();
};
