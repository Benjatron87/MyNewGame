const path = require("path");
module.exports = function(app) {    

    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../App/Views/Home.html"));
    });
    app.get("/Play", (req, res) => {
        res.sendFile(path.join(__dirname, "../App/Views/GameView.html"));
    })
    app.get("/About", (req, res) => {
        res.sendFile(path.join(__dirname, "../App/Views/About.html"));
    })
    app.get("/Settings", (req, res) => {
        res.sendFile(path.join(__dirname, "../App/Views/Settings.html"));
    })
};