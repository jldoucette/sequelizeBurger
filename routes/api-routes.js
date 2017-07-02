var db = require("../models");

module.exports = function(app) {

  app.get("/", function(req, res) {

    db.burgers.findAll({}).then(function(data) {
        var hbsObject = {
      burgers: data
    };
     res.render("index", hbsObject);
    });
  });

  app.post("/", function(req, res) {
    console.log(req.body);
    db.burgers.create({
      burger_name: req.body.burger_name,
      devoured: req.body.devoured
    }).then(function(data) {
      res.redirect("/");
    });
  });  


app.put("/:id", function(req, res) {
    db.burgers.update({
      devoured: true
  },{
    where: {
      id:req.params.id
    }
  }).then(function(data){
   res.redirect("/");
  });
});
} 
 
