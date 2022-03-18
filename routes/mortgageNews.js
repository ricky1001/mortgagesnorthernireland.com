var express = require("express");
var router = express.Router();
var mortgageNews = require("../models/mortgageNews");
var passport = require("passport");

// Mortgage News Routes
// Index Route
router.get("/mortgage-news", function(req, res){
  mortgageNews.find({}, function(err, mNews){
    var metatitle = "Mortgage News NI";
    var metadescription = "The latest Mortgage News in Northern Ireland" 
    if(err){
      console.log(err)
    } else{
      res.render("./mortgageNews/mortgage-news", {mNews: mNews,
                                                 metatitle: metatitle,
                                                 metadescription: metadescription,
                                                 quickCallHelpers: req.quickCallHelpers
                                                 });
    }
  })
  
});

//New Route
router.get("/mortgage-news-new", isLoggedIn, function(req, res){
  var metatitle = "New Mortgage News Story";
  var metadescription = "Add a new Mortgage News Story"
  res.render("./mortgageNews/mortgage-news-new",
            {metatitle: metatitle,
             metadescription: metadescription,
             quickCallHelpers: req.quickCallHelpers
    
             }
            );
});

//Create Route
router.post("/mortgage-news-post", function(req, res){
  //Create mortgage advice post
  var metatitle = req.body.mortgageNews.metatitle;
  var metadescription = req.body.mortgageNews.metadescription;
  console.log(req.body);
  mortgageNews.create(req.body.mortgageNews, function(err, newmnPost){
    if(err){
      console.log("Error")
    }else{
      newmnPost.save();
      res.redirect("/mortgage-news/" + req.body.mortgageNews._id);
    }
  })
  //Redirect to the Index Route
});



//Show Route
router.get("/mortgage-news/:id", function(req, res){
  mortgageNews.findById(req.params.id, function(err, foundNewsPost){
    if(err){
      console.log(err)
    }else{
      res.render("./mortgageNews/mortgage-news-show", {foundNewsPost: foundNewsPost,
                                                      metatitle: foundNewsPost.metatitle,
                                                      metadescription: foundNewsPost.metadescription,
                                                      quickCallHelpers: req.quickCallHelpers
                                                      });
    }
  })
});

//Edit Route
router.get("/mortgage-news/:id/edit", isLoggedIn, function(req, res){
  mortgageNews.findById(req.params.id, function(err, foundNewsPost){
    if(err){
      res.redirect("/mortgage-news");
    } else{
      res.render("./mortgageNews/mortgage-news-edit", {newsPost: foundNewsPost,
                                                      metatitle: foundNewsPost.metatitle,
                                                      metadescription: foundNewsPost.metadescription,
                                                      quickCallHelpers: req.quickCallHelpers
                                                      });
    }
  });
});

//UpDate Route
router.put("/mortgage-news/:id", function(req, res){
  mortgageNews.findByIdAndUpdate(req.params.id, req.body.mortgageNews, function(err, updatedNewsPost){
    if(err){
      res.redirect("./mortgageNews/mortgage-news");
    }else{
      res.redirect("/mortgage-news/" + req.params.id);
    }
  });
});


router.delete("/mortgage-news/:id", function(req, res){
  //Destroy Blog
  mortgageNews.findByIdAndRemove(req.params.id, function(err){
    if(err){
      res.redirect("/mortgage-news");
    }else{
       res.redirect("/mortgage-news");
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
