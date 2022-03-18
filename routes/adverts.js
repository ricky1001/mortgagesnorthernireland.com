var express = require("express");
var router = express.Router();

router.get("/mortgage-agreement-in-principle-ni", function(req, res){
    

    res.render("adverts/aip-info",{
        metatitle: "Agreement in Principle NI",
        metadescription: "Get an agreement in principle / decision in principle for your mortgage in Northern Ireland. Find out which lenders will consider your application and who will offer you the best deal on the market",
        quickCallHelpers: req.quickCallHelpers
        
        
    });  
});


router.get("/agreement-in-principle-booking", function(req, res){
   
    res.render("adverts/aip-booking",{
        metatitle: "Book your consultation",
        metadescription: "Get an agreement in principle / decision in principle for your mortgage in Northern Ireland. Find out which lenders will consider your application and who will offer you the best deal on the market",
        quickCallHelpers: req.quickCallHelpers
   
    });  
});



module.exports = router;