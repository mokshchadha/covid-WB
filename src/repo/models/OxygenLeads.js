const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OxygenLeads = new Schema({
  name: String,
  contact: String,
  address: String,
  lastUpdated: Number,
  updatedBy: String,
});

module.exports = mongoose.model("OxygenLeads", OxygenLeads);
