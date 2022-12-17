const express = require("express");
const app = express();

// setup bodyParser to handle the items that get send back to the server.
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
var jsonParser = bodyParser.json();

// __dirname always needed when you deplay server on other pc. !IMPORTANT

// root dir.
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  var result = num1 + num2;

  res.send(`hello, the outcome is  ${result}`);
});

// bmiCalculator page
app.get("/bmiCalculator", function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", function (req, res) {
  var weight = Number(req.body.weight);
  var height = Number(req.body.height);
  var bmi = weight / Math.pow(height, 2);

  res.send(`Hello, your BMI is ${bmi}`);
});

// Starts the server
app.listen(3000, function () {
  console.log(`Example app listening on port 3000}`);
});
