const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");

const DocumentSchema = new mongoose.Schema({
  document: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});
module.exports = mongoose.model("Document", UserSchema);