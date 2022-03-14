var express = require("express");
var router = express.Router();
var Rate = require("../models/rates");

var mortgageAdvice =        require("../models/mortgageAdvice");

//message received
router.get("/testing-index", function(req, res){
  res.render("testing-index", {
                          metatitle: "Testing Index",
                          metadescription: "Testing Index"
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
  mortgageAdvice.find({}, function(err, mAdvice){
    if(err){
      console.log(err)
    }else{
      Rate.find({}, function(err, rate){
        if(err){
          console.log(err);
        }else{

          
          var filteredRate = Rate.aggregate([
            {$sort : {rate: 1}}])
            .then(function(filteredRate){
              res.render("home",
              {
                metatitle, metatitle,
                metadescription: metadescription,
                rate: filteredRate,
                mAdvice: mAdvice,
                quickCallHelpers: req.quickCallHelpers
              })
            })
        }
      })
    }
  })
})


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
           // console.log(filteredRate); // "normalReturn"
          // filteredRate.forEach(function(filteredRate){
            // console.log(filteredRate)
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