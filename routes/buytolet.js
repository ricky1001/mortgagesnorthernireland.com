var express = require("express");
var router = express.Router();
var buytolet = require("../models/buytolet");
var passport = require("passport");
var rates = rates;

//Buy to Let Routes
// Index Route
router.get("/buy-to-let-mortgages", function(req, res){
  buytolet.find({}, function(err, btlPost){
    if(err){
      console.log(err)
    } else{
      res.render("./buytolet/buy-to-let-mortgages", 
                                                {
                                                 rates: rates,
                                                 btlPost: btlPost,
                                                 metatitle: "Buy to Let Mortgages | Free Buy to Let Mortgage Advice",
                                                 metadescription: "Mortgage Adviser NI has access to all the best buy to let mortgage NI deals. Give us a call about any Buy to Let Mortgage Enquiry you may in Northern Ireland .",
                                                 quickCallHelpers: req.quickCallHelpers
                                                 });
    }
  })
});

//New Route
router.get("/buy-to-let-mortgages-new", isLoggedIn, function(req, res){
  var metatitle = "New Buy to Let Mortgage Post";
  var metadescription = "Add a new Buy to Let Mortgage Post"
  res.render("./buytolet/buy-to-let-mortgages-new",
            {metatitle: metatitle,
             metadescription: metadescription,
             quickCallHelpers: req.quickCallHelpers
             }
            );
});

//Create Route
router.post("/buy-to-let-mortgages-post", function(req, res){
  //Create mortgage advice post
  var metatitle = req.body.buytolet.metatitle;
  var metadescription = req.body.buytolet.metadescription;
  console.log(req.body);
  buytolet.create(req.body.buytolet, function(err, newbtlPost){
    if(err){
      console.log("Error")
    }else{
      newbtlPost.save();
      res.redirect("/buy-to-let-mortgages");
    }
  })
  //Redirect to the Index Route
});



//Show Route
router.get("/buy-to-let-mortgages/:id", function(req, res){
  buytolet.findById(req.params.id, function(err, foundbtlPost){
    if(err){
      console.log(err)
    }else{
      res.render("./buytolet/buy-to-let-mortgages-show", {foundbtlPost: foundbtlPost,                                                     
                                                      metatitle: foundbtlPost.metatitle,
                                                      metadescription: foundbtlPost.metadescription,
                                                      quickCallHelpers: req.quickCallHelpers
                                                      });
    }
  })
});

//Edit Route
router.get("/buy-to-let-mortgages/:id/edit", isLoggedIn, function(req, res){
  buytolet.findById(req.params.id, function(err, foundbtlPost){
    if(err){
      res.redirect("/buy-to-let-mortgages");
    } else{
      res.render("./buytolet/buy-to-let-mortgages-edit", {foundbtlPost: foundbtlPost,
                                                      metatitle: foundbtlPost.metatitle,
                                                      metadescription: foundbtlPost.metadescription,
                                                      quickCallHelpers: req.quickCallHelpers
                                                      });
    }
  });
});

//UpDate Route
router.put("/buy-to-let-mortgages/:id", function(req, res){
  buytolet.findByIdAndUpdate(req.params.id, req.body.buytolet, function(err, updatedbtlPost){
    if(err){
      res.redirect("./buytolet/buy-to-let-mortgages");
    }else{
      res.redirect("/buy-to-let-mortgages/" + req.params.id);
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