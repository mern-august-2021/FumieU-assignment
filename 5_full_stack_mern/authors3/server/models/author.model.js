const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');

const AuthorSchema = new mongoose.Schema({
    name: {
      type:String,
      required:[true, "Name field must not be blank"],
      minlength:[3, "Author name must be 3 characters or more"],
      unique: [true, "This author is already registered!" ]
    },
  //   suitableForKids:{
  //     type: Boolean
  // } 
  }, {timestamps: true});

const Author = mongoose.model("Author", AuthorSchema);

AuthorSchema.plugin(uniqueValidator);
module.exports = Author;