const Country = require("../models/country");
const Region = require("../models/region");
const Regions = require("../seeds/spain-regions.json");

async function seed() {
  try {
    await Region.deleteMany({});
    Regions.map(async (region) => {
      let country = await Country.findOne({
        "name.en": region.country,
      }).exec();
      region.country = country._id;
      if (region.parent) {
        try {
          let parent = await Region.findOne({
            name: region.parent,
          }).exec();
          if (parent) {
            region.parent = parent._id;
          } else {
            delete region["parent"];
          }
        } catch (error) {
          console.log("error finding parent", error, region.parent);
        }
      }
      try {
        await Region.create(region);
      } catch (error) {
        console.log("error creating region", error, region);
      }
    });
    console.log("regions seeded:", Regions.length);
  } catch (error) {
    console.log("error seeding regions", error);
  }
}

module.exports = { seed };
