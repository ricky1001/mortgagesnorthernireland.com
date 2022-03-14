var express = require("express");
var router = express.Router();
var mortgageAdvice = require("../models/mortgageAdvice");
var passport = require("passport");
var latestRates = require("../models/latestRates");

//mortgage Advice
// Index Route

router.get("/mortgage-advice", function(req, res){
  var metatitle = "Mortgage Advice Blog";
  var metadescription = "Read the latest posts from our best mortgage brokers"
  mortgageAdvice.find({}, function(err, mAdvice){
    if(err){
      console.log(err)
    } else{
      res.render("./mortgageAdvice/mortgage-advice", {mAdvice: mAdvice,
                                                      metatitle: metatitle,
                                                      metadescription: metadescription,
                                                      quickCallHelpers: req.quickCallHelpers});
    }
  }) 
});




//New Route
router.get("/mortgage-advice-new", isLoggedIn, function(req, res){
  var metatitle = "New Mortgage Advice Post";
  var metadescription = "Create a new Mortgage Advice Post";
  res.render("./mortgageAdvice/mortgage-advice-new",
            {metatitle: metatitle,
             metadescription: metadescription,
             quickCallHelpers: req.quickCallHelpers}
            );
});

//Create Route
router.post("/mortgage-advice-post", function(req, res){
  //Create mortgage advice post
  var metatitle = req.body.mortgageAdvice.metatitle;
  var metadescription = req.body.mortgageAdvice.metadescription;
  req.body.mortgageAdvice.content = req.sanitize(req.body.mortgageAdvice.content);
  console.log(req.body);
  mortgageAdvice.create(req.body.mortgageAdvice, function(err, newmaPost){
    if(err){
      console.log(err)
    }else{
      newmaPost.save();
      res.redirect("/mortgage-advice");
    }
  })
  //Redirect to the Index Route
});



//Show Route
router.get("/mortgage-advice/:id", function(req, res){
  mortgageAdvice.findById(req.params.id, function(err, foundPost){
    console.log(foundPost);
    if(err){
      console.log(err)
    }else{
      res.render("./mortgageAdvice/mortgage-advice-show", 
                 {post: foundPost, 
                  metatitle: foundPost.metatitle,
                  metadescription: foundPost.metadescription,
                  quickCallHelpers: req.quickCallHelpers});
    }
  })
});

//Edit Route
router.get("/mortgage-advice/:id/edit", isLoggedIn, function(req, res){
  mortgageAdvice.findById(req.params.id, function(err, foundPost){
    if(err){
      res.redirect("/mortgage-advice");
    } else{
      res.render("./mortgageAdvice/mortgage-advice-edit", {maPost: foundPost,
                                                          metatitle: foundPost.metatitle, 
                                                          metadescription: foundPost.metadescription,
                                                          quickCallHelpers: req.quickCallHelpers});
    }
  });
});

//UpDate Route
router.put("/mortgage-advice/:id", function(req, res){
  mortgageAdvice.findByIdAndUpdate(req.params.id, req.body.mortgageAdvice, function(err, updatedPost){
    if(err){
      res.redirect("./mortgageAdvice/mortgage-advice");
    }else{
      res.redirect("/mortgage-advice/" + req.params.id);
    }
  });
});


router.delete("/mortgage-advice/:id", function(req, res){
  //Destroy Blog
  mortgageAdvice.findByIdAndRemove(req.params.id, function(err){
    if(err){
      res.redirect("/mortgage-advice");
    }else{
       res.redirect("/mortgage-advice");
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