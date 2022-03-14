var express = require("express");
var router = express.Router();

router.get("/calculators", function(req, res){
  res.render("./calculators/calculators", {
                                          metatitle: "Mortgage Calculators NI | Mortgages Northern Ireland",
                                          metadescription: "Work out how much you could borrow, what your repayments would be and more with our mortgage calculators",
                                          quickCallHelpers: req.quickCallHelpers
                                           }
                                         );
});

//Before you Apply Routes

//How Much can I borrow Route 

router.get("/calculators/how-much-can-i-borrow", function(req, res){
  res.render("./calculators/how-much-can-i-borrow", {
                                          metatitle: "Mortgage Calculators NI | Mortgages Northern Ireland",
                                          metadescription: "Work out how much you could borrow, what your repayments would be and more with our mortgage calculators",
                                          maxLoan : "",
                                          quickCallHelpers: req.quickCallHelpers
                                           }
                                         );
});

//Monthly repayments 

router.get("/calculators/monthly-repayments", function(req, res){
  res.render("./calculators/monthly-repayments", {
                                          metatitle: "Monthly Repayment mortgage calculator | Mortgages Northern Ireland",
                                          metadescription: "Work out what your monthly mortgage repayments would be with Mortgages Northern Irelands repayment calculator",
                                          quickCallHelpers: req.quickCallHelpers
                                           }
                                         );
});

//Stamp Duty

router.get("/calculators/stamp-duty-calculator", function(req, res){
  res.render("./calculators/stamp-duty-calculator", {
                                          metatitle: "Stamp Duty Calculator | Mortgages Northern Ireland",
                                          metadescription: "Work out how much stamp duty you will have to pay with Mortgages Northern Irelands stamp duty calculator",
                                          quickCallHelpers: req.quickCallHelpers
                                           }
                                         );
});



module.exports = router;
