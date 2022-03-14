var mongoose = require("mongoose");

//mongoose config
var rateSchema = new mongoose.Schema({
  lender: String,
  ltv: Number,
  twoYearTerm: Number,
  threeYearTerm: Number,
  fiveYearTerm: Number,
  fixedRate: String,
  trackerRate: String,
  rate: Number,
  fees: Number,
  rateExpires: Date,
  productFeatures: String,
});

module.exports = mongoose.model("Rate", rateSchema);