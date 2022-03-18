var mongoose = require("mongoose");

var mortgageAdviceSchema = new mongoose.Schema({
  image: String,
  title: String,
  content: String,
  metatitle: String,
  metadescription: String,
  
});

module.exports = mongoose.model("mortgageAdvice", mortgageAdviceSchema);