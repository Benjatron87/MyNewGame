var highscore = 0;

module.exports = function(app) {    

    app.post("/highscore", (req, res)=> {
      console.log(req.body);
      
      highscore = req.body.highscore;
  })

    app.get("/highscore", (req, res) => {
        
        data = highscore;
        res.json(data);
        
      });
}
