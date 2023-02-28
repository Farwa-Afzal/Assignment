const mongoose = require("mongoose");

var Schema = mongoose.Schema;
var User = new Schema({
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    gender:{
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique : true
    },
    password:{
        type: String,
        required: true
    }
  });
  
  var Model = mongoose.model("User", User);
  
  module.exports = Model;