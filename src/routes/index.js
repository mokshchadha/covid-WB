const Router = require("router");
const { ObjectId } = require("mongodb");
const { Hospital } = require("../repo");
const { gpHTML } = require("../frontend/pages/main");

const httprouter = Router();
function unescapeHTML(s) {
  return String(s)
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

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

module.exports = { httprouter };
