var express = require("express");
var router = express.Router();

router.get("/testing-sliding-sidebar", function(req, res){
        res.render("test/testing-sliding-sidebar",{
            metatitle: "Sliding sidebar test",
            metadescription: "testing-sliding-sidebar",
            quickCallHelpers: req.quickCallHelpers
        });  
});

router.get("/testing-nav", function(req, res){
    res.render("test/testing-nav-main",{
        metatitle: "New Nav Test",
        metadescription: "New Nav Test",
        quickCallHelpers: req.quickCallHelpers
    });  
});




module.exports = router;