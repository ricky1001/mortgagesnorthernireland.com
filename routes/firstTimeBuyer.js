var express = require("express");
var router = express.Router();
var firstTimeBuyer = require("../models/firstTimeBuyer");
var passport = require("passport");

//First Time Buyer Routes
// Index Route
router.get("/first-time-buyer-mortgages", function(req, res){
  firstTimeBuyer.find({}, function(err, ftbPost){
    if(err){
      console.log(err)
    } else{
      res.render("./firstTimeBuyers/first-time-buyer-mortgages", 
                                                {
                                                 ftbPost: ftbPost,
                                                 metatitle: "First Time Buyer Mortgage Advice | Mortgages Northern Ireland",
                                                 metadescription: "Our free mortgage brokers are able to give all the first time buyer mortgage advice you will ever need. Call mortgage adviser NI today.",
                                                 quickCallHelpers: req.quickCallHelpers
                                                 });
    }
  })
});

//New Route
router.get("/ftb-mortgages-new", isLoggedIn, function(req, res){
  var metatitle = "New First Time Buyer Post";
  var metadescription = "Add a new First Time Buyer Post"
  res.render("./firstTimeBuyers/ftb-mortgages-new",
            {metatitle: metatitle,
             metadescription: metadescription,
             quickCallHelpers: req.quickCallHelpers 
             }
            );
});

//Create Route
router.post("/ftb-mortgages-post", function(req, res){
  //Create mortgage advice post
  var metatitle = req.body.firstTimeBuyer.metatitle;
  var metadescription = req.body.firstTimeBuyer.metadescription;
  console.log(req.body);
  firstTimeBuyer.create(req.body.firstTimeBuyer, function(err, newftbPost){
    if(err){
      console.log(err)
    }else{
      newftbPost.save();
      res.redirect("/first-time-buyer-mortgages");
    }
  })
  //Redirect to the Index Route
});



//Show Route
router.get("/first-time-buyer-mortgages/:id", function(req, res){
  firstTimeBuyer.findById(req.params.id, function(err, foundftbPost){
    var ftbAllPages = firstTimeBuyer.find({});

    if(err){
      console.log(err)
    }else{
      res.render("./firstTimeBuyers/ftb-mortgages-show", {foundftbPost: foundftbPost,
                                                          ftbAllPages: ftbAllPages,
                                                      metatitle: foundftbPost.metatitle,
                                                      metadescription: foundftbPost.metadescription,
                                                      quickCallHelpers: req.quickCallHelpers
                                                      });
    }
  })
});

//Edit Route
router.get("/first-time-buyer-mortgages/:id/edit", isLoggedIn, function(req, res){
  firstTimeBuyer.findById(req.params.id, function(err, foundFTBPost){
    if(err){
      res.redirect("/first-time-buyer-mortgages");
    } else{
      res.render("./firstTimeBuyers/ftb-mortgages-edit", {foundFTBPost: foundFTBPost,
                                                      metatitle: foundFTBPost.metatitle,
                                                      metadescription: foundFTBPost.metadescription,
                                                      quickCallHelpers: req.quickCallHelpers
                                                      });
    }
  });
});

//UpDate Route
router.put("/first-time-buyer-mortgages/:id", function(req, res){
  firstTimeBuyer.findByIdAndUpdate(req.params.id, req.body.firstTimeBuyer, function(err, updatedftbPost){
    if(err){
      res.redirect("./firstTimeBuyers/first-time-buyer-mortgages");
    }else{
      res.redirect("/first-time-buyer-mortgages/" + req.params.id);
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
