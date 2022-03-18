var express = require("express");
var router = express.Router();
var mortgageType = require("../models/mortgageType");
var passport = require("passport");


//Mortgage Types Routes
// Index Route
router.get("/mortgage-types", function(req, res){
  mortgageType.find({}, function(err, mtPost){
    if(err){
      console.log(err)
    } else{
      res.render("./mortgageTypes/mortgage-types", 
                                                {
                                                 mtPost: mtPost,
                                                 metatitle: "Mortgage Types",
                                                 metadescription: "A look at the different types of mortgages that are available in Northern Ireland",
                                                 quickCallHelpers: req.quickCallHelpers
                                                 });
    }
  })
});

//New Route
router.get("/mortgage-types-new", isLoggedIn, function(req, res){
  var metatitle = "New Mortgage Type Post";
  var metadescription = "Add a new Mortgage Type Post"
  res.render("./mortgageTypes/mortgage-types-new",
            {metatitle: metatitle,
             metadescription: metadescription,
             quickCallHelpers: req.quickCallHelpers
    
             }
            );
});

//Create Route
router.post("/mortgage-types-post", function(req, res){
  //Create mortgage advice post
  var metatitle = req.body.mortgageType.metatitle;
  var metadescription = req.body.mortgageType.metadescription;
  console.log(req.body);
  mortgageType.create(req.body.mortgageType, function(err, newmtPost){
    if(err){
      console.log(err)
    }else{
      newmtPost.save();
      res.redirect("/mortgage-types");
    }
  })
  //Redirect to the Index Route
});



//Show Route
router.get("/mortgage-types/:id", function(req, res){
  mortgageType.findById(req.params.id, function(err, foundmtPost){
    if(err){
      console.log(err)
    }else{
      res.render("./mortgageTypes/mortgage-types-show", {foundmtPost: foundmtPost,
                                                      metatitle: foundmtPost.metatitle,
                                                      metadescription: foundmtPost.metadescription,
                                                      quickCallHelpers: req.quickCallHelpers
                                                      });
    }
  })
});

//Edit Route
router.get("/mortgage-types/:id/edit", isLoggedIn, function(req, res){
  mortgageType.findById(req.params.id, function(err, foundmtPost){
    if(err){
      res.redirect("/mortgage-types");
    } else{
      res.render("./mortgageTypes/mortgage-types-edit", {foundmtPost: foundmtPost,
                                                      metatitle: foundmtPost.metatitle,
                                                      metadescription: foundmtPost.metadescription,
                                                      quickCallHelpers: req.quickCallHelpers
                                                      });
    }
  });
});

//UpDate Route
router.put("/mortgage-types/:id", function(req, res){
  mortgageType.findByIdAndUpdate(req.params.id, req.body.mortgageType, function(err, updatedmtPost){
    if(err){
      res.redirect("./mortgageTypes/mortgage-types");
    }else{
      res.redirect("/mortgage-types/" + req.params.id);
    }
  });
});

function isLoggedIn(req, res, next){
  if(req.isAuthenticated()){
    return next();
  }
  res.redirect("/login")
}

module.exports = router;
