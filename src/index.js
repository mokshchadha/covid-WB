const http = require("http");
const mongoose = require("mongoose");
const finalhandler = require("finalhandler");
const { httprouter } = require("./routes");
const { sendErrorObject, sendObject, getRequestBody } = require("./utils/api");
const { getConfig, Configs } = require("../appConfigs");
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

const server = http.createServer(async function (req, res) {
  printRequest(req);
  res.sendObject = (obj) => sendObject(res, obj);
  res.sendError = (code, msg) => sendErrorObject(res, code, msg);
  req.getRequestBody = () => getRequestBody(req);
  httprouter(req, res, finalhandler(req, res));
});

async function printRequest(req) {
  const ip =
    (req.headers["x-forwarded-for"] || "").split(",").pop() ||
    req.connection?.remoteAddress ||
    req.socket?.remoteAddress ||
    req.connection?.socket?.remoteAddress;

  console.log("\x1b[33m%s\x1b[0m", `${ip} ${req.method} ${req.url}`);
}

server.listen(process.env.PORT || 8001);
