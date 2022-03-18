var express = require("express");
var router = express.Router();
var passport = require("passport");
var User = require("../models/user");

//Auth Routes

router.get("/register", function(req, res){
  metatitle = "Register";
  metadescription = "Register to be a site admin"
  res.render("register", {
                          metatitle: metatitle,
                          metadescription: metadescription,
                          quickCallHelpers: req.quickCallHelpers
                          });
})

//Auth Post Route

router.post("/register", function(req, res){
  req.body.username
  req.body.password
  User.register(new User({username: req.body.username}), req.body.password, function(err, user){
    if(err){
     console.log(err);
      return res.render("register");
    }
    passport.authenticate("local")(req, res, function(){
      res.redirect("/secret")
    })
  })
})

//login Routes

router.get("/login", function(req, res){
  metatitle = "Login";
  metadescription = "Administration Login Form";
  res.render("login", {
                      metatitle: metatitle,
                      metadescription: metadescription,
                      quickCallHelpers: req.quickCallHelpers
                      });
})

//login Post Route
router.post("/login", passport.authenticate("local",{
  successRedirect: "/",
  failureRedirect: "/login"
  
}) ,function(req, res){
  
})

//logout Route
router.get("/logout", function(req, res){
  req.logout();
  res.redirect("/");
})


function isLoggedIn(req, res, next){
  if(req.isAuthenticated()){
    return next();
  }
  res.redirect("/login")
}

module.exports = router;