const Country = require("../models/country");
const Continent = require("../models/continent");
const Countries = require("../seeds/countries.json");

async function seed() {
  try {
    await Country.deleteMany({});
    Countries.map(async (country) => {
      let continent = await Continent.findOne({
        "name.en": country.continent,
      }).exec();
      country.continent = continent._id;
      await Country.create(country);
    });
    console.log("countries seeded:", Countries.length);
  } catch (error) {
    console.log("error seeding countries", error);
  }
}

module.exports = { seed };
