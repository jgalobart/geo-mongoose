const mongoose = require("mongoose");
const { Point } = require("mongoose-geojson-schema");

// Define a schema
const Schema = mongoose.Schema;
ObjectId = Schema.ObjectId;

const citySchema = new Schema({
  name: String,
  slug: String,
  regionId: { type: mongoose.Schema.Types.ObjectId, ref: "Region" },
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

module.exports = mongoose.model("City", citySchema);
