// Zaki Mohammed - 101507934

const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  
  name: {
    type: String,
    required: [true, "Name is required"]
  },

  username: {
  type: String,
  required: [true, "Username is required"],
  minlength: [4, "Username must be at least 4 characters"],
  maxlength: [100, "Username must be at most 100 characters"]
  },


  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    match: [
      /^\S+@\S+\.\S+$/,
      "Please use a valid email address"
    ]
  },

  address: {
    street: {
      type: String,
      required: [true, "Street is required"]
    },

    city: {
      type: String,
      required: [true, "City is required"],
      match: [
        /^[A-Za-z\s]+$/,
        "City must contain only letters and spaces"
      ]
    },

    zipcode: {
      type: String,
      required: [true, "Zipcode is required"],
      match: [
        /^\d{5}(-\d{4})?$/,
        "Zipcode must be valid format (12345 or 12345-6789)"
      ]
    }
  },

  phone: {
  type: String,
  required: [true, "Phone is required"],
  match: [
    /^\d-\d{3}-\d{3}-\d{4}$/,
    "Phone must be format 1-123-123-1234"
  ]
 },


  website: {
    type: String,
    required: [true, "Website is required"],
    match: [
      /^(http|https):\/\/[^ "]+$/,
      "Website must be valid URL"
    ]
  }

});

module.exports = mongoose.model("User", UserSchema);
