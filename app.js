var methodOverride = require("method-override");
var MongoClient = require('mongodb').MongoClient;
var assert      = require("assert");
var expressSanitizer = require("express-sanitizer");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var express = require("express");
var ejs = require('ejs');
var app = express();
var passport = require("passport");
var LocalStrategy = require("passport-local");
var passportLocalMongoose = require("passport-local-mongoose");
var nodemailer = require("nodemailer");
//Required for server
const http = require('http').createServer(app);

//Calling Util folders to supply quick call logic
var callBackStrings = require("./util/quickCallBack/bookCallBack")
var adjustedTimes = require("./util/quickCallBack/adjustedTimes")

//URL string to connect to mongodb Atlas start
const databaseConnect = 'mongodb+srv://ricky1001:Astron!23@mortgageadviserni.gcolq.mongodb.net/mortgageadviserni?retryWrites=true&w=majority';
//URL string to connect to mongodb Atlas finish


app.use(express.json());

// const controller = require("./controller")

// app.post("/testing-fetch", controller.postingData) 



//Model Schemas
var User =                  require("./models/user");
var buytoletRoutes           = require("./routes/buytolet");
var enquiryRoutes            = require("./routes/enquiry");
var firstTimeBuyerRoutes     = require("./routes/firstTimeBuyer");
var governmentschemesRoutes  = require("./routes/governmentschemes");
var indexRoutes              = require("./routes/index");
var mortgageAdviceRoutes     = require("./routes/mortgageAdvice");
var mortgageNewsRoutes       = require("./routes/mortgageNews");
var mortgageTypeRoutes       = require("./routes/mortgageType");
var remortgageRoutes         = require("./routes/remortgage");
var selfEmployedRoutes       = require("./routes/selfEmployed");
var userRoutes               = require("./routes/user");
var calculatorRoutes         = require("./routes/calculators");
var latestRatesRoutes        = require("./routes/latestRates");
var bestBuys                 = require("./routes/best-Buys");
var adverts                  = require("./routes/adverts");
var test                     = require("./routes/test");
var testingFetch             = require("./routes/testing-fetch");


//Trying to add Quick Call Back Logic to all routes
var requestTime = function(req, res, next){

  req.callBackString = callBackStrings.callBackStrings();
  req.adjustedTimes = adjustedTimes.adjustedTimes;
  req.times = adjustedTimes.times;
  req.hoursPastNine = adjustedTimes.hoursPastNine;

  req.quickCallHelpers = {
    dayStrings: req.callBackString,
    adjustedTimes: req.adjustedTimes,
    times: req.times,
    hoursPastNine: req.hoursPastNine
  }
  
  next();
}

app.use(requestTime)

//App Config
app.use(require("express-session")({
  secret: "Surfing is super awesome",
  resave: false,
  saveUninitialized: false
}));


app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSanitizer());
//new code to connect to Atlas start
//App Configuration
mongoose.connect(databaseConnect);
//new code to connect to Atlas finish
// //mongoose.connect("mongodb://localhost/MortgageRates");
// mongoose.connect("mongodb://ricky1001:Astron!23@ds113136.mlab.com:13136/mortgageadviserni");
app.use(express.static("public"));
app.use(methodOverride("_method"));
app.use(passport.initialize());
app.use(passport.session());




passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


//render the form
app.get("/form", (req, res) => {
  res.render("form", {
                      metatitle: "form",
                      metadescription: "form"
                      });
})



//post to the form
app.post("/send", function (req, res){
  var output = `
  <p>You have a new contact request</p>
  <h3>Contact Details</h3>
  <ul>
    <li>First Name: ${req.body.firstName}</li>
    <li>Last Name: ${req.body.lastName}</li>
    <li>email: ${req.body.email}</li>
    <li>Contact Number: ${req.body.contactNumber}</li>
  </ul>
  <h3>Message</h3>
  <p>${req.body.message}</p>
  `;
let transporter = nodemailer.createTransport({
  service: "gmail",
  secure: false,
  port: 25,
  auth:{
    user: "richard@mortgagesnorthernireland.com",
    pass: "Pippip!23"
  },
  tls: {
    rejectUnauthorized: false
  }
 });

let HelperOptions = {
  from: '"Mortgages Northern Ireland" <richard@mortgagesnorthernireland.com',
  to: "richard@mortgagesnorthernireland.com",
  subject: "Mortgage Enquiry",
  html: output
  };

  transporter.sendMail(HelperOptions, (error, info) => {
    if(error){
      console.log(error)
    }else{
      console.log("The message was sent");
    res.redirect("/enquiry-success");
    }
  });

});

//retrieve latest Rates

app.get("/latestRates", function(req, res){
  latestRates.find({}, function(err, latestRates){
    if(err){
      console.log(err)
    }else{
      res.render("./bestBuys/best-buys", {
                                          metatitle: "Find the Latest Mortgage Best Buys | Mortgages Northern Ireland",
                                          metadescription: "Mortgages Northern Ireland aim to provide our clients with the best mortgage products every time search the market today for the latest offers from across the market",
                                          latestRates: latestRates
                                        }
      )
    }
  })
})



app.use(indexRoutes);
app.use(buytoletRoutes);
app.use(enquiryRoutes);
app.use(firstTimeBuyerRoutes);
app.use(governmentschemesRoutes);
app.use(mortgageAdviceRoutes);
app.use(mortgageNewsRoutes);
app.use(mortgageTypeRoutes);
app.use(remortgageRoutes);
app.use(selfEmployedRoutes);
app.use(userRoutes);
app.use(calculatorRoutes);
app.use(latestRatesRoutes);
app.use(bestBuys);
app.use(adverts);
app.use(test);
app.use(testingFetch);




/*
app.listen(3000, function(){
  console.log("Server is Running");
});
*/

//New code removed connect to Mongodb atlas start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
//New code removed connect to Mongodb atlas finish


//New code to connect to Mongodb atlas start


// const PORT = process.env.databaseConnect || 5000;

// mongoose.connect(databaseConnect, { useFindAndModify: false})
// .then(result => {
  
//   http.listen(PORT, () => {
//     console.log('listening on 5000')
// });

// }).catch(err => {
//   console.log(err);
// })
//New code to connect to Mongodb atlas Finish