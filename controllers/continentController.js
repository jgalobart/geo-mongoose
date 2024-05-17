const Continent = require("../models/continent");
const Continents = require("../seeds/continents.json");

async function seed() {
  try {
    await Continent.deleteMany({});
    const continents = await Continent.insertMany(Continents);
    console.log("Continents seeded:", continents.length);
  } catch (error) {
    console.log("error seeding continents", error);
  }
}

module.exports = { seed };
