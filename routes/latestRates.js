var express = require("express");
var router = express.Router();
var latestRates = require("../models/latestRates");
var passport = require("passport");

//Create Route
router.post("/latest-rates-post", function(req, res){
    //Create mortgage advice post
    latestRates.create(req.body.latestRates, function(err, newLatestRate){
      if(err){
        console.log("Error")
      }else{
        newLatestRate.save();
      }
    })
  });

module.exports = router;