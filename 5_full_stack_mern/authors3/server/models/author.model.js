const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
    name: {
      type:String,
      required:[true, "Name field must not be blank"],
      minlength:[3, "Author name must be 3 characters or more"]
    },
  }, {timestamps: true});

const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;