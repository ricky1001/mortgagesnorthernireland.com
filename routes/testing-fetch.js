var express = require("express");
var router = express.Router();

router.post("/testing-fetch", function(req, res){
     console.log("here r there")
     console.log(req) 
     return res.status(200).json({
          status: 200,
          message: "whatthe  fuck"
     })
});





module.exports = router;