const bodyParser = require("body-parser");
const https = require("https");
const express = require("express");
const request = require("request");

const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/signup.html");
});

app.listen(3000, () => {
  console.log(`Server is running on 3000`);
});
