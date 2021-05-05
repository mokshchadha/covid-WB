const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RtpcrCentres = new Schema({
  name: String,
  address: String,
  contact: String,
  lastUpdated: Number,
  updatedBy: String,
});

module.exports = mongoose.model("RtpcrCentres", RtpcrCentres);
