const mongoose = require("mongoose");
const monoUri = "mongodb://localhost:27017/";

const connectToMongoose = () => {
  if (mongoose.connect(monoUri)) {
    console.log("Connected Successfully");
  }
};

module.exports = connectToMongoose;
