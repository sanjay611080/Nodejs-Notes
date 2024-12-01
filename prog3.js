const https = require("https");
const crypto = require("crypto");
const fs = require("fs");

const start = Date.now();

// OS Operation
function doRequest() {
  https
    .request("https://www.google.com", (res) => {
      res.on("data", () => {});
      res.on("end", () => {
        console.log("[OS] REQ:", Date.now() - start);
      });
    })
    .end();
}

// Libuv Threadpool
function doHash() {
  crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
    console.log("[TP] HASH:", Date.now() - start);
  });
}

// Libuv Threadpool (two roundtrips)
function doIO() {
  fs.readFile("multitask.js", "utf8", () => {
    console.log("[TP] FS:", Date.now() - start);
  });
}
console.log("Hello World!")
function greet(){
    // console.log("Hello")
    return 5;
}

doIO();
doRequest();
doHash();
doHash();
doHash();
doHash();
doHash();
doHash();