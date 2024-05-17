const City = require("../models/city");
const Region = require("../models/region");
const Cities = require("../seeds/spain-cities.json");

async function seed() {
  try {
    await City.deleteMany({});
    Cities.map(async (city) => {
      let region = await Region.findOne({
        name: city.region,
      }).exec();
      if (region) {
        city.region = region._id;
      } else {
        delete city["region"];
      }
      try {
        console.log("create city", city);
        console.log("response", await City.create(city));
      } catch (error) {
        console.log("error creating city", error, city);
      }
    });
    console.log("cities seeded:", Cities.length);
  } catch (error) {
    console.log("error seeding cities", error);
  }
}

module.exports = { seed };
