const http = require("http");
const mongoose = require("mongoose");
const finalhandler = require("finalhandler");
const { httprouter } = require("./routes");
const { sendErrorObject, sendObject, getRequestBody } = require("./utils/api");

mongoose.connect(
  "mongodb+srv://moksh:one2three@cluster0.cpws5.mongodb.net/covidwb?retryWrites=true&w=majority", //connected to the production
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
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
