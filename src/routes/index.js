const Router = require("router");
const _ = require("lodash");
const { ObjectId } = require("mongodb");
const { Hospital } = require("../repo");
const { gpHTML } = require("../frontend/pages/main");

function unescapeHTML(s) {
  return String(s)
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

const httprouter = Router();

httprouter.route("/").get(async function (req, res) {
  const html = "<!DOCTYPE html>" + unescapeHTML(gpHTML([]).outerHTML);
  res.setHeader("Content-Type", "text/html");
  res.end(html);
});

httprouter.route("/data").get(async function (req, res) {
  try {
    const data = await Hospital.find({});
    res.sendObject(data);
  } catch (error) {
    res.sendError(500, { msg: "server crash" });
  }
});

httprouter.route("/login").post(async function (req, res) {
  try {
    const email = await req.getRequestBody();
    const response = isEmailVerified(email);
    res.sendObject({ data: response });
  } catch (error) {
    res.sendError(400, { msg: "Error" + error });
  }
});

httprouter.route("/data/:id").post(async function (req, res) {
  try {
    const reqData = await req.getRequestBody();
    const { data, person } = reqData;
    const filtered = transformUpdate(data, person);
    console.log("filtered data ", filtered);
    await Hospital.findOneAndUpdate({ _id: ObjectId(req.params.id) }, filtered);
    const fff = await Hospital.findOne({ _id: ObjectId(req.params.id) });
    console.log(fff);
    res.sendObject({ msg: "Success" });
  } catch (error) {
    console.error(error);
    res.sendError(400, { msg: "Error" + error });
  }
});

const isEmailVerified = (email) => {
  const mailMap = {
    "chadhamoksh@gmail.com": {
      name: "Moksh",
      email: "chadhamoksh@gmail.com",
      phone: "9459845615",
    },
    "rbarsharoy@gmail.com": {
      name: "Barsha",
      email: "rbarsharoy@gmail.com",
      phone: "8016518175",
    },
    "debadrita.rim@gmail.com": {
      name: "Debadrita",
      email: "debadrita.rim@gmail.com",
      phone: " 8900481286",
    },
  };
  if (!Object.keys(mailMap).includes(email))
    throw "Sorry, Person Not Authorized!";

  return mailMap[email];
};

transformUpdate = (data, person) => {
  console.log("insided the transform ");
  const res = {
    ...data,
    name: data?.name ? data.name.toUpperCase() : "",
    rtpcr: String(data.rtpcr) === "true" ? true : false,
    availableBeds: parseInt(data.availableBeds),
    lastUpdated: new Date().getTime(),
    updatedBy: `${person.email}-(${person.phone})`,
  };
  return _.omit(res, ["_id", "__v"]);
};

module.exports = { httprouter };
