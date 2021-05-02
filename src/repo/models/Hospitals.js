const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Hospitals = new Schema({
  name: String,
  totalBeds: Number,
  availableBeds: Number,
  availableO2: Number,
  key: Number,
  address: String,
  contact: String,
  lastUpdated: Number,
  updatedBy: String,
});

module.exports = mongoose.model("Hospitals", Hospitals);
