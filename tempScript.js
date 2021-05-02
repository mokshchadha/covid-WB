const mongoose = require("mongoose");
const { getConfig, Configs } = require("./appConfigs");
const { Hospital } = require("./src/repo");

// Database Connection
const MONGO_URL = getConfig(Configs.MONGO_URL);
mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const data = `1,Egra Subdivisional SSH,100,69,10,90
2,Haldia SDH,50,33,5,45
3,Nandigram SSH,112,95,12,100
4,Panskura SSH,300,190,25,275
5,Tamluk Distt Hospital,90,87,5,85
6,Baroma MS Hospital,123,44,20,103
7,Chandipur MS Hospital,160,14,20,140
8,Raghunath Ayurved,100,68,5,95
9,Egra Safe Home,100,96,10,90
10,Haldia Safe Home,100,97,10,90
11,Nandaumar Safe Home,46,19,5,41`;

async function run() {
  const dataObjs = data
    .split("\n")
    .map((e) => e.trim())
    .map((e) =>
      e.split(",").reduce(
        (a, f, i, s) => ({
          key: s[0],
          name: s[1],
          totalBeds: s[2],
          availableBeds: s[3],
          totalO2: s[4],
          availableO2: s[5],
          address: "",
          contact: "",
          lastUpdated: new Date().getTime(),
          updatedBy: "moksh",
        }),
        {}
      )
    );
  console.log(dataObjs);
  await Promise.all(
    dataObjs.map((e) => {
      const h = new Hospital(e);
      return h.save();
    })
  );
  console.log("done");
}

run();
