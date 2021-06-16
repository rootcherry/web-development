const bodyParser = require("body-parser");
const express = require("express");
const request = require("request");

const app = express();

app.get("/", function(req, res) {
  console.log("It works!");
});















app.listen(3000, function() {
  console.log("Server is running on port 3000");
});
