// jshint esversion:6

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!111111");
});

app.get("/about", (req, res) => {
  res.send("Ik doe dit werk heel graag!");
});

app.get("/contact", (req, res) => {
  res.send("John van den Heuvel, 18 years old");
});

app.get("/contact1", (req, res) => {
  res.send("John van den Heuvel, 18 years old");
});

app.listen(3000, function () {
  console.log("port 3000 has started.");
});
