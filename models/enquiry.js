var mongoose = require("mongoose");

var enquirySchema = new mongoose.Schema({
  name: String,
  postcode: String,
  email: String,
  contactNumber: String,
  content: String
});

module.exports = mongoose.model("enquiry", enquirySchema);