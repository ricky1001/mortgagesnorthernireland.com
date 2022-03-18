var express = require("express");
var router = express.Router();
var remortgage = require("../models/remortgage");
var passport = require("passport");

//Re-Mortgage Routes
// Index Route
router.get("/re-mortgage-advice", function(req, res){
  remortgage.find({}, function(err, rmPost){
    if(err){
      console.log(err)
    } else{
      const testDate = new Date();
      res.render("./remortgage/re-mortgage-advice", 
                                                {
                                                 rmPost: rmPost,
                                                 metatitle: "Fee Free re-mortgage Advice in Northern Ireland",
                                                 metadescription: "Our mortgage brokers have access to all the latest re-mortgage Northern Ireland deals. Mortgages Northern Ireland can help with any remortgage enquiries that you may have.",
                                                 quickCallHelpers: req.quickCallHelpers,
                                                 testDate: testDate
                                                 });
    }
  })
});

//New Route
router.get("/re-mortgage-new", isLoggedIn, function(req, res){
  var metatitle = "New re-mortgage Post";
  var metadescription = "Add a new re-mortgage Post"
  res.render("./remortgage/re-mortgage-new",
            {metatitle: metatitle,
             metadescription: metadescription,
             quickCallHelpers: req.quickCallHelpers
    
             }
            );
});

//Create Route
router.post("/re-mortgage-post", function(req, res){
  //Create mortgage advice post
  var metatitle = req.body.remortgage.metatitle;
  var metadescription = req.body.remortgage.metadescription;
  console.log(req.body);
  remortgage.create(req.body.remortgage, function(err, newrmPost){
    if(err){
      console.log("Error")
    }else{
      newrmPost.save();
      res.redirect("/re-mortgage-advice");
    }
  })
  //Redirect to the Index Route
});



//Show Route
router.get("/re-mortgage-advice/:id", function(req, res){
  remortgage.findById(req.params.id, function(err, foundrmPost){
    if(err){
      console.log(err)
    }else{
      res.render("./remortgage/re-mortgage-show", {foundrmPost: foundrmPost,
                                                        
                                                      metatitle: foundrmPost.metatitle,
                                                      metadescription: foundrmPost.metadescription,
                                                      quickCallHelpers: req.quickCallHelpers
                                                      });
    }
  })
});

//Edit Route
router.get("/re-mortgage-advice/:id/edit", isLoggedIn, function(req, res){
  remortgage.findById(req.params.id, function(err, foundrmPost){
    if(err){
      res.redirect("/re-mortgage-advice");
    } else{
      res.render("./remortgage/re-mortgage-edit", {foundrmPost: foundrmPost,
                                                      metatitle: "edit remortgage post",
                                                      metadescription: "edit remortgage post",
                                                      quickCallHelpers: req.quickCallHelpers
                                                      });
    }
  });
});

//UpDate Route
router.put("/re-mortgage-advice/:id", function(req, res){
  remortgage.findByIdAndUpdate(req.params.id, req.body.remortgage, function(err, updatedrmPost){
    if(err){
      res.redirect("./remortgage/re-mortgage-advice");
    }else{
      res.redirect("/re-mortgage-advice/" + req.params.id);
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
