const normalRequest = require("request");
const url = require("url");
const fs = require("fs");
const _ = require("lodash");
const multiparty = require("multiparty");
var AWS = require("aws-sdk");
const mime = require("mime-types");

function sendObject(res, object) {
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.end(JSON.stringify(object));
}

function sendErrorObject(res, code, message) {
  res.statusCode = code;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.end(JSON.stringify({ message }));
}

function getRequestBody(req) {
  return new Promise(function (resolve, reject) {
    var data = "";
    req.on("data", function (chunk) {
      data += chunk;
    });
    req.on("end", function () {
      console.log(data);
      try {
        resolve(JSON.parse(data));
      } catch (e) {
        resolve(data);
      }
    });
  });
}

function request(args) {
  return new Promise(function (resolve, reject) {
    normalRequest(args, function (error, response) {
      if (error) {
        console.error(error);
        reject(error);
      }
      resolve(response);
    });
  });
}

const HTTPClient = {
  request(options) {
    return request(options);
  },
  streamableRequest(options) {
    return normalRequest(options);
  },
};

function handleMultiPartRequest(req) {
  return new Promise((resolve, reject) => {
    const form = new multiparty.Form({
      uploadDir: "media",
    });
    var fields = {};
    var files = [];
    form.on("error", function (err) {
      reject(err);
    });
    form.on("field", function (name, value) {
      fields[name] = value;
    });
    form.on("file", function (name, file) {
      fs.renameSync(file.path, "media/" + file.originalFilename);
      files.push(file.originalFilename);
    });
    form.on("close", function () {
      console.log("fields:");
      console.log(fields);
      console.log("files:");
      console.log(files);
      if (files.length > 0) resolve({ fields, files });
    });
    form.parse(req);
  });
}

function getURLQuery(reqUrl) {
  return url.parse(reqUrl, true)?.query;
}

async function downloadFile(options, Key) {
  let filename = "";
  let contentType = "";
  const wStream = normalRequest(options)
    .on("response", (res) => {
      contentType = res.headers["content-type"].split(";")[0];
      const ext = contentType
        ? _.findKey(mime.types, (o) => o === contentType)
        : "nop";
      filename = Key + "." + ext;
    })
    .pipe(fs.createWriteStream("media/" + Key));

  return new Promise(function (resolve, reject) {
    wStream.on("finish", () => {
      console.log("All writes are now complete.");
      resolve({ filename, Key, contentType });
    });
    wStream.on("error", (e) => {
      console.log(e);
      reject(e);
    });
  });
}

async function uploadFileToS3(o, deleteFile = true) {
  const { filename, Key, contentType } = await o;
  const filepath = `media/${Key}`;
  console.log("filepath: " + filepath);

  var params = {
    Bucket: "sourcechatapp-media",
    Key: filename,
    Body: fs.readFileSync(filepath),
    ACL: "public-read",
    ContentType: contentType,
  };
  try {
    var result = await new AWS.S3({ apiVersion: "2006-03-01" })
      .putObject(params)
      .promise();
    console.log(
      `Successfully uploaded data to S3: ${params.Bucket}/${params.Key}\nResult:`
    );
    console.log(result);
    if (deleteFile)
      fs.unlink(filepath, (err) =>
        err ? console.error("File delete failed: " + err) : ""
      );
    return (
      "https://sourcechatapp-media.s3.ap-south-1.amazonaws.com/" + filename
    );
  } catch (e) {
    console.log("S3 upload failed with error: " + e);
  }
  return null;
}

module.exports = {
  sendObject,
  sendErrorObject,
  getRequestBody,
  request,
  getURLQuery,
  handleMultiPartRequest,
  uploadFileToS3,
  downloadFile,
  HTTPClient,
};
