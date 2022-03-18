var express = require("express");
var router = express.Router();
var enquiry = require("../models/enquiry");
var passport = require("passport");

//Mailer modules
const nodemailer = require("nodemailer");
const sendgridTransport = require("nodemailer-sendgrid-transport");
const transporter = nodemailer.createTransport(sendgridTransport({
    auth: {
        api_key: "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"
    }
}));

//quick Call Enquiry Route
router.post("/quick-call-enquiry", function(req, res){
  return transporter.sendMail({
    to: "info@mortgagesnorthernireland.com",
    from: "info@mortgagesnorthernireland.com",
    subject: "Quick Call Request",
    html: `<div>
              <p>
                A client has requested a call back from Mortgages Northern Ireland on ${req.body.preferredDay} between ${req.body.preferredTime}.

                Please call this client back on ${req.body.clientContactNum}
              </p>
           </div>`
  }).then(result => {
    res.redirect("back");
  })
  .catch(err => {
    console.log(err);
  })
})

//Call Back enquiry Route
router.post("/book-call-back", function(req, res){
  return transporter.sendMail({
      to: "info@mortgagesnorthernireland.com",
      from: "info@mortgagesnorthernireland.com",
      subject: "Call Back Request",
      html: `<div>
      <div>A client wants to book a call back</div>
      <ul>
        <li>First Name - ${req.body.firstName}</li>
        <li>Surname - ${req.body.lastName}</li>
        <li>email - ${req.body.emailCallBack}</li>
        <li>Contact Number - ${req.body.contactNumber}</li>
        <li>Call Back Day - ${req.body.callBackDay}</li>
        <li>Call Back Time - ${req.body.callBackTime}</li>
      </ul>
      
      </div>` 
  })
  .then(result => {
    return transporter.sendMail({
      to: req.body.emailCallBack,
      from: "info@mortgagesnorthernireland.com",
      subject: "Call Back Request Confirmation",
      html: `<div>
      <p>Hi ${req.body.firstName}, <br><br>
      Thanks for your enquiry. 
      <br><br>
      We can confirm that we have received a request for a call back from one of our brokers between ${req.body.callBackTime}.</p>
      <p>Richard will call you between ${req.body.callBackTime}</p>
      <p>We will look forward to speaking with you</P>
      <p><strong>Best Wishes</strong></p>
      <p><strong>Mortgages Northern Ireland</strong>
      </div>`

      
  })
})
  .then(result => {
    res.redirect("back")
  })
  .catch(err => {
      console.log(err)
  })
})

//Create an Enquiry Route
router.post("/enquiry-new", function(req, res){
  req.body.enquiry.content = req.sanitize(req.body.enquiry.content);
  enquiry.create(req.body.enquiry, function(err, newEnquiry){
    if(err){
      console.log("Error")
    }else{
      newEnquiry.save();
      res.redirect("/success")
    }
  })
});


//enquiry success route
router.get("/success", function(req, res){
  var metatitle = "Succesful Enquiry"
  var metadescription = "Your Enquiry has been received"
  res.render("success", {
                         metatitle: metatitle,
                         metadescription: metadescription
                         }
            );
            });

function isLoggedIn(req, res, next){
  if(req.isAuthenticated()){
    return next();
  }
  res.redirect("/login")
}

module.exports = router;
