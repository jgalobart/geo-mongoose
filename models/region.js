const mongoose = require("mongoose");

// Define a schema
const Schema = mongoose.Schema;
ObjectId = Schema.ObjectId;

const regionSchema = new Schema({
  name: String,
  slug: String,
  parent: { type: mongoose.Schema.Types.ObjectId, ref: "Region" },
  country: { type: mongoose.Schema.Types.ObjectId, ref: "Country" },
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

module.exports = mongoose.model("Region", regionSchema);
