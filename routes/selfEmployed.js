var express = require("express");
var router = express.Router();
var selfemployed = require("../models/selfEmployed");
var passport = require("passport");

//self-employed Routes
// Index Route
router.get("/self-employed-mortgages", function(req, res){
  selfemployed.find({}, function(err, sePost){
    if(err){
      console.log(err)
    } else{
      res.render("./self-employed/self-employed-mortgages", 
                                                {
                                                 sePost: sePost,
                                                 metatitle: "Self-employed Mortgage Advice in Northern Ireland",
                                                 metadescription: "Mortgages Northern Ireland NI offer free self-employed Mortgage Advice to all of our Northern Ireland clients. Contact us today for the best self-employed mortgage advice.",
                                                 quickCallHelpers: req.quickCallHelpers
                                                 });
    }
  })
});

//New Route
router.get("/self-employed-mortgages-new", isLoggedIn, function(req, res){
  var metatitle = "New Self Employed Mortgage Post";
  var metadescription = "Add a new Self Employed Mortgage Post"
  res.render("./self-employed/self-employed-mortgages-new",
            {metatitle: metatitle,
             metadescription: metadescription,
             quickCallHelpers: req.quickCallHelpers
    
             }
            );
});

//Create Route
router.post("/self-employed-mortgages-post", function(req, res){
  //Create mortgage advice post
  var metatitle = req.body.selfemployed.metatitle;
  var metadescription = req.body.selfemployed.metadescription;
  console.log(req.body);
  selfemployed.create(req.body.selfemployed, function(err, newsePost){
    if(err){
      console.log("Error")
    }else{
      newsePost.save();
      res.redirect("/self-employed-mortgages");
    }
  })
  //Redirect to the Index Route
});



//Show Route
router.get("/self-employed-mortgages/:id", function(req, res){
  selfemployed.findById(req.params.id, function(err, foundsePost){
    if(err){
      console.log(err)
    }else{
      res.render("./self-employed/self-employed-mortgages-show", {foundsePost: foundsePost,                                                     
                                                      metatitle: foundsePost.metatitle,
                                                      metadescription: foundsePost.metadescription,
                                                      quickCallHelpers: req.quickCallHelpers
                                                      });
    }
  })
});

//Edit Route
router.get("/self-employed-mortgages/:id/edit", isLoggedIn, function(req, res){
  selfemployed.findById(req.params.id, function(err, foundsePost){
    if(err){
      res.redirect("/self-employed-mortgages");
    } else{
      res.render("./self-employed/self-employed-mortgages-edit", {foundsePost: foundsePost,
                                                      metatitle: foundsePost.metatitle,
                                                      metadescription: foundsePost.metadescription,
                                                      quickCallHelpers: req.quickCallHelpers
                                                      });
    }
  });
});

//UpDate Route
router.put("/self-employed-mortgages/:id", function(req, res){
  selfemployed.findByIdAndUpdate(req.params.id, req.body.selfemployed, function(err, updatedsePost){
    if(err){
      res.redirect("./self-employed/self-employed-mortgages");
    }else{
      res.redirect("/self-employed-mortgages/" + req.params.id);
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