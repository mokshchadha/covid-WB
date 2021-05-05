const normalRequest = require("request");
const url = require("url");
const fs = require("fs");
const _ = require("lodash");

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

function getURLQuery(reqUrl) {
  return url.parse(reqUrl, true)?.query;
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
  uploadFileToS3,
  HTTPClient,
};
