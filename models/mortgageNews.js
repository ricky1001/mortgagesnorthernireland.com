var mongoose = require("mongoose");

var mortgageNewsSchema = new mongoose.Schema({
  image: String,
  title: String,
  content: String,
  metatitle: String,
  metadescription: String,
  
});

module.exports = mongoose.model("mortgageNews", mortgageNewsSchema);