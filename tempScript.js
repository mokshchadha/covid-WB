const mongoose = require("mongoose");
const { getConfig, Configs } = require("./appConfigs");
const { Hospital, RtpcrCentres } = require("./src/repo");

// Database Connection
const MONGODB_URL = getConfig(Configs.MONGODB_URL);

mongoose.connect(
  process.env.MONGODB_URI || MONGODB_URL, //connected to the production
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }
);

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

const rtpcLab = `SLR Diagnostics-Manjushree,Haldia,WB,721602-9647955665-Sujay
Barghasipur Prathamik Sasthakendra-Dighasipur, Bhabanipur,Chakdipa-NA-Sujay
Haldia Subdivisional Hospital-Manjushree,Haldia,WB,721602-3224274108-Sujay
Dr. B.C. Roy Hospital-Banbishnupur, Balughata Rd,Haldia,721645-8170008563-Sujay
Chandipur Hospital-Chandipur - Nandigram Rd, Erashal, West Bengal 721659-03228 272 250-Sanjana
Basulia Gramin Hospital-Haldia Tamluk Mechada road Maishadal,721628-3224240243-Prithwiraj
Bio Care Diagnostic Center-Hpl Link Road, Basudevpur, HALDIA - 721604-9732557909-Pratyusha 
SRL Diagnostics-13 More, Haldia Township-9593095242-Sujay
Home collection in haldia-Haldia-7908912594/7001866300-Barsha`;

async function rtpcrData() {
  const dataObjs = rtpcLab
    .split("\n")
    .map((e) => e.trim())
    .map((e) =>
      e.split("-").reduce(
        (a, f, i, s) => ({
          name: s[0],
          address: s[1],
          contact: s[2],
          lastUpdated: new Date().getTime(),
          updatedBy: s[3],
        }),
        {}
      )
    );
  console.log(dataObjs);
  await Promise.all(
    dataObjs.map((e) => {
      const h = new RtpcrCentres(e);
      return h.save();
    })
  );
  console.log("done");
}

try {
  rtpcrData();
} catch (error) {
  console.log("herer");
}
