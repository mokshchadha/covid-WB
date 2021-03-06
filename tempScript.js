const mongoose = require("mongoose");
const { getConfig, Configs } = require("./appConfigs");
const { Hospital, RtpcrCentres, OxygenLeads } = require("./src/repo");

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

async function run() {
  const data = {
    name: "Temporary",
    contact: "9459845615",
    address: "idk",
    timestamp: 1621771597268,
    person: { name: "moksh", email: "chch@chc", contact: "99999" },
  };
  const o = new OxygenLeads(data);
  await o.save();
}
run();
