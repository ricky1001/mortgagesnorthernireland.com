var express = require("express");
var router = express.Router();
var latestRates = require("../models/latestRates");

router.get("/best-buys", function(req, res){
    latestRates.find({}, function(err, latestRates){
        if(err){
            console.log(err);
        }else{
            res.render("./bestBuys/best-buys", {
                                                metatitle: "Find the Latest Mortgage Best Buys | Mortgages Northern Ireland",
                                                metadescription: "Mortgages Northern Ireland aim to provide our clients with the best mortgage products every time search the market today for the latest offers from across the market",
                                                latestRates: latestRates,
                                                quickCallHelpers: req.quickCallHelpers
                                                }
            );
        }
    }
    )
})




module.exports = router;
