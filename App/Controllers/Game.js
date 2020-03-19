

GameSetup = function(){
    Ship(
        params = {
            posX: 10,
            posY: 10,
            ctx: ctx
        }
    )

    ctx.beginPath();
    ctx.rect(100, 100, 100, 100);
    ctx.fillStyle = "rgb(255, 0, 0, 1)";
    ctx.fill();
    ctx.closePath();
};

GameSetup()

