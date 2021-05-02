require("dotenv").config();

const Configs = {
  MONGODB_URL: "MONGODB_URL",
};

function getConfig(cfg) {
  return process.env[cfg] || "";
}

module.exports = { getConfig, Configs };
