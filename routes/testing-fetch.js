var express = require("express");
var router = express.Router();

router.post("/testing-fetch", function(req, res){
     console.log("here r there")
     console.log("this is the request body" + req.body) 
     return res.status(200).json({
          status: 200,
          message: "Your enquiry has been received and assigned to an adviser we will contact as soon as possible"
     })

});





module.exports = router;