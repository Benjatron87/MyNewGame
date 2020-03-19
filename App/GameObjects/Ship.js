var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var Ship = function(params){

    var posX = params.posX;
    var posY = params.posY;
    let shipImg = document.createElement('img')
    shipImg.src = '/Images/shipImg.png';


    ctx.beginPath();
    ctx.drawImage(shipImg, posX, posY, 100, 150);
    ctx.fill();
    ctx.closePath();
};
