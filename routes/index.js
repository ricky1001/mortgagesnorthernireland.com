var express = require("express");
var router = express.Router();

//Required for Best Buy Start
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
//Required for Best Buy End

//message received
router.get("/testing", function(req, res){
  res.render("testing", {
                          metatitle: "Testing Index",
                          metadescription: "Testing Index"
  })
});

router.post("/testing-fetch", function(req, res){
  console.log("here r there")
  console.log("req original  url " + req.originalUrl)
  console.log("rreq body" + JSON.stringify(req.body)) 
  return res.status(200).json({
       status: 200,
       message: "whatthe  fuck"
  })
});

//message received
router.get("/enquiry-success", function(req, res){
  res.render("enquiry-success", {
                          metatitle: "Enquiry Success",
                          metadescription: "Your message has been received"
  })
});

//map  Page

router.get("/map", function(req, res){
res.render("map", {
                   metatitle: "Find us",
                   metadescription: "find us",
                   quickCallHelpers: req.quickCallHelpers
});
});


//Home Page 

router.get("/", function(req, res){
  var metatitle = "Mortgages Northern Ireland | Fee Free Mortgage Broker | Mortgage Advice | NI"
  var metadescription = "Mortgages Nothern Ireland offer free mortgage advice on all mortgages in northern Ireland. Contact mortgages Northern Ireland for a free appointment."

          products = jsonData.slice(0, 3);
          console.log(products)
          addDetailsToProducts(products, args);
     

            return  res.render("home",
              {
                metatitle, metatitle,
                metadescription: metadescription,
                products: products,
                args: args,
                reqObj: args,
                productHTML: compileEJS(products, args),
                quickCallHelpers: req.quickCallHelpers
              })
            })
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


//Self-Build Pages
router.get("/self-build-mortgages", function(req, res){
  var metatitle = "Self Build Mortgages NI - Free Mortgage Advice Northern Ireland"
  var metadescription = "Self build Mortgages NI ! Mortgages Nrthern Ireland offers free mortgage advice to all self build mortgage applicants in northern Ireland. Contact a mortgage broker today."
  res.render("./self-build/self-build-mortgages",
             {metatitle:metatitle, metadescription: metadescription,
              quickCallHelpers: req.quickCallHelpers}
            )
})

//PRIVACY POLICY
router.get("/privacy-policy", function(req, res){
  var metatitle = "Privacy policy - Mortgages Northern Ireland"
  var metadescription = "Read our privacy policy at mortgages ni"
  res.render("privacy-policy",
             {metatitle:metatitle, metadescription: metadescription,
              quickCallHelpers: req.quickCallHelpers}
            )
})

// Cookies
router.get("/cookies", function(req, res){
  var metatitle = "How we use cookies - Mortgages Northern Ireland"
  var metadescription = "A brief look at how mortgage adviser ni uses cookies to enhance your experience."
  res.render("cookies",
             {metatitle:metatitle, metadescription: metadescription,
              quickCallHelpers: req.quickCallHelpers}
            );
});

//our Service
router.get("/our-service", function(req, res){
  var metatitle = "Our Service - Mortgages Northern Ireland"
  var metadescription = "Have a look at the services provided by Mortgage Adviser NI in Northern Ireland"
  res.render("our-service",
             {metatitle:metatitle, metadescription: metadescription,
              quickCallHelpers: req.quickCallHelpers}
            );
});

//Why Get Advice
router.get("/why-get-advice", function(req, res){
  var metatitle = "Why get Advice - Mortgages Northern Ireland"
  var metadescription = "Find out why you should get advice from Mortgage Adviser NI"
  res.render("why-get-advice",
             {metatitle:metatitle, metadescription: metadescription,
              quickCallHelpers: req.quickCallHelpers}
            )
})

//faq
router.get("/faq", function(req,res){
  var metatitle = "FAQ - Mortgages Northern Ireland"
  var metadescription = "Have a look at some of the FAQ's our mortgage advisers deal with on a reguar basis."
  res.render("faq",
             {metatitle:metatitle, metadescription: metadescription,
              quickCallHelpers: req.quickCallHelpers}
            )
})

//Contact us
router.get("/contact-us", function(req,res){
  var metatitle = "Contact Mortgages Northern Ireland"
  var metadescription = "Submit an enquiry to Mortgages Northern Ireland"
  res.render("contact-us",
             {metatitle:metatitle, 
              metadescription: metadescription,
              quickCallHelpers: req.quickCallHelpers}
            )
})

//new head
router.get("/heads", function(req, res){
  var metatitle = "Temporary Header"
  var metadescription = "New attempt at header"
  res.render("./partials/heads",
             {metatitle:metatitle, metadescription: metadescription,
              }
            );
});

//test
router.get("/test", function(req, res){
  var metatitle = "Temporary Header"
  var metadescription = "New attempt at header"
  Rate.find({}, function(err, rate){
    if(err){
      console.log(err);
    }else{
       var filteredRate =  Rate.aggregate([          
                { $sort : { rate : 1 } } ])       
       .then(function(filteredRate) {

      res.render("test",
                {metatitle:metatitle, 
                 metadescription: metadescription,
                 rate:filteredRate,
                 quickCallHelpers: req.quickCallHelpers})
                              })
    }
  })
})


module.exports = router;