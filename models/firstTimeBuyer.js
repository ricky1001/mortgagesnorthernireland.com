var mongoose = require("mongoose");

var firstTimeBuyerSchema = new mongoose.Schema({
  image: String,
  title: String,
  content: String,
  metatitle: String,
  metadescription: String,
  _id: String,
});

module.exports = mongoose.model("firstTimeBuyer", firstTimeBuyerSchema)