var express = require("express");
var router = express.Router();
var governmentScheme = require("../models/governmentschemes");
var passport = require("passport");


//Government Schemes Routes
// Index Route
router.get("/government-schemes", function(req, res){
  governmentScheme.find({}, function(err, gsPost){
    if(err){
      console.log(err)
    } else{
      res.render("./governmentschemes/government-schemes", 
                                                {
                                                 gsPost: gsPost,
                                                 metatitle: "Government Mortgage Schemes in Northern Ireland | Free Mortgage Advice",
                                                 metadescription: "Government Mortgages schemes in Northern Ireland. Mortgage Adviser NI have a wealth of knowledge regarding all government mortgage schemes in Northern Ireland.",
                                                 quickCallHelpers: req.quickCallHelpers
                                                 });
    }
  })
});

//New Route
router.get("/government-schemes-new", isLoggedIn, function(req, res){
  var metatitle = "New Government Scheme Post";
  var metadescription = "Add a new Government Scheme Post"
  res.render("./governmentschemes/government-schemes-new",
            {metatitle: metatitle,
             metadescription: metadescription,
             quickCallHelpers: req.quickCallHelpers
    
             }
            );
});

//Create Route
router.post("/government-schemes-post", function(req, res){
  //Create mortgage advice post
  var metatitle = req.body.governmentScheme.metatitle;
  var metadescription = req.body.governmentScheme.metadescription;
  console.log(req.body);
  governmentScheme.create(req.body.governmentScheme, function(err, newgsPost){
    if(err){
      console.log("Error")
    }else{
      newgsPost.save();
      res.redirect("/government-schemes");
    }
  })
  //Redirect to the Index Route
});



//Show Route
router.get("/government-schemes/:id", function(req, res){
  governmentScheme.findById(req.params.id, function(err, foundgsPost){
    if(err){
      console.log(err)
    }else{
      res.render("./governmentschemes/government-schemes-show", {foundgsPost: foundgsPost,
                                                        
                                                      metatitle: foundgsPost.metatitle,
                                                      metadescription: foundgsPost.metadescription,
                                                      quickCallHelpers: req.quickCallHelpers
                                                      });
    }
  })
});

//Edit Route
router.get("/government-schemes/:id/edit", isLoggedIn, function(req, res){
  governmentScheme.findById(req.params.id, function(err, foundgsPost){
    if(err){
      res.redirect("/government-schemes");
    } else{
      res.render("./governmentschemes/government-schemes-edit", {foundgsPost: foundgsPost,
                                                      metatitle: "edit government scheme post",
                                                      metadescription: "edit government scheme post",
                                                      quickCallHelpers: req.quickCallHelpers
                                                      });
    }
  });
});

//UpDate Route
router.put("/government-schemes/:id", function(req, res){
  governmentScheme.findByIdAndUpdate(req.params.id, req.body.governmentScheme, function(err, updatedgsPost){
    if(err){
      res.redirect("./governmentschemes/government-schemes");
    }else{
      res.redirect("/government-schemes/" + req.params.id);
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