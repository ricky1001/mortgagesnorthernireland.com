var mongoose = require("mongoose");

//mongoose config
var latestRateSchema = new mongoose.Schema({
  lender: String,
  mortgageType: String,
  initialRate: Number,
  initialPeriod: Number,
  rateExpires: String,
  svr: Number,
  fee: Number,
  cashBack: Number,
  ltv: Number 
});

module.exports = mongoose.model("latestRate", latestRateSchema);