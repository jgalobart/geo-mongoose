const mongoose = require("mongoose");
require("dotenv").config();

const mongoDB =
  "mongodb+srv://" +
  encodeURIComponent(process.env.DB_USER) +
  ":" +
  encodeURIComponent(process.env.DB_PASSWORD) +
  "@" +
  process.env.DB_SERVER +
  "/" +
  process.env.DB_NAME +
  "?retryWrites=true&w=majority";

continentController = require("./controllers/continentController");
countryController = require("./controllers/countryController");
regionController = require("./controllers/regionController");
cityController = require("./controllers/cityController");

async function main() {
  const db = await mongoose.connect(mongoDB);
  console.log("Connected to MongoDB", mongoDB);
  await continentController.seed();
  await countryController.seed();
  await regionController.seed();
  await cityController.seed();
  //await db.disconnect();
  console.log("MongoDB connection closed");
}

main()
  .then(() => {
    console.log("Script finished");
  })
  .catch((err) => console.log(err, mongoDB));
