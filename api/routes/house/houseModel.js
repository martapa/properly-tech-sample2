const mongoose = require("mongoose");
const { Schema } = mongoose;

const houseSchema = new Schema({
  price: {
    type: Number,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  bedrooms: {
    type: Number,
    required: true
  },
  bathrooms: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true,
    max: 500
  },
  picture: {
    type: String
  }
});


module.exports = mongoose.model('house', houseSchema);