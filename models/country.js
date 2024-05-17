const mongoose = require("mongoose");

// Define a schema
const Schema = mongoose.Schema;
ObjectId = Schema.ObjectId;

const countrySchema = new Schema({
  name: { en: String, es: String, fr: String, de: String, pt: String },
  slug: String,
  continent: { type: mongoose.Schema.Types.ObjectId, ref: "Region" },
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

module.exports = mongoose.model("Country", countrySchema);
