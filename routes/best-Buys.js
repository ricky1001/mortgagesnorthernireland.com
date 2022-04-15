var express = require("express");
var router = express.Router();
const ejs = require("ejs");
var read = require("fs").readFileSync;
var join = require("path").join;
var path = join( "views/includes/item.ejs");

const jsonData = require("../staticProducts/pageLoad.json");


let args = {
    licenseKey: "89a6a144-2cde-46b0-b396-b1363d883fe1",
    input: {
      CompanyId: "IMOU85",
      SiteId: "USSCB2",
      Term: 30,
      ExpectedValuation: 150000,
      LoanRequired: 100000,
      DepositAmount: 50000,
      MortgageType: "Standard",
      PaymentMethod: "Repayment",
      MortgageClass: {
        Fixed: "No_Filter",
        Variable: "Ignore",
        Discount: "Ignore",
        Tracker: "Ignore",
        Capped: "Ignore",
        LiborLinked: "Ignore",
      },
      ReasonForMortgage: "Purchase",
      PostCode: "XI",
      NumberOfItems: 20,
  
      Filters: {}
    },
  };
  

router.get("/best-buys", function(req, res){
    products = jsonData;
    addDetailsToProducts(products, args)
        
    return res.render("index", {
      metatitle: "Best Mortgage Deals - Search the market with Mortgages Northern Ireland",
      metadescription: "Use our sourcing software to search the market for the best deals available in  Northern Ireland",  
      products,
      args: args,
      reqObj: args,
      productHTML: compileEJS(products, args),
    });
});

//Best Buys Partial Test Start
router.get("/partial-test", function(req, res){
    products = jsonData;
    addDetailsToProducts(products, args)
        
    return res.render("partial-test", {
      metatitle: "Best Mortgage Deals - Search the market with Mortgages Northern Ireland",
      metadescription: "Use our sourcing software to search the market for the best deals available in  Northern Ireland",
      products,
      args: args,
      reqObj: args,
      productHTML: compileEJS(products, args),
    });
});
//Best Buys Partial test end

//Function that adds additional data fields to each element of the products final array before being rendered this will make it easier to automatically write the required text on the rendered screen we are currently adding Property Value, TotalInterestPayable by subtracting and an LoanRequired field 
const addDetailsToProducts = function(arr, obj){
    arr.forEach(function(item){
     
      item.PropertyValue = obj.input.ExpectedValuation;
      item.TotalInterestPayable = item.TrueCostFullTerm - obj.input.LoanRequired;
      item.TotalInterestPayable = parseInt(item.TotalInterestPayable.toFixed(2));
      item.LoanRequired = obj.input.LoanRequired;
      let initialRatePeriodInWholeYears = item.InitialRatePeriodMonths / 12;
      initialRatePeriodInWholeYears = initialRatePeriodInWholeYears.toFixed(0);
      item.InitialRatePeriodInWholeYears = initialRatePeriodInWholeYears;

      item.ltv = (obj.input.LoanRequired / obj.input.ExpectedValuation) * 100;
      item.ltv = item.ltv.toFixed();
    })
  }

  //Function to compile a url string 
    const compileEJS = (arr = [], args = {}) => {
    const data = arr.map((pd) => ejs.compile(read(path, "utf8"))({ pd, args}));
    return data.join(" ");
  };




module.exports = router;
