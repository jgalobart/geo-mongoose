const mongoose = require("mongoose");

// Define a schema
const Schema = mongoose.Schema;

const continentSchema = new Schema({
  name: String,
  slug: String,
  geopoint: {
    type: {
      type: String, // Don't do `{ location: { type: String } }`
      enum: ["Point"], // 'location.type' must be 'Point'
    },
    coordinates: {
      type: [Number],
    },
  },
});

module.exports = mongoose.model("Continent", continentSchema);
