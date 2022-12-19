const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// Gets the page
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// What to do after.
app.post("/", (req, res) => {
  const city = req.body.cityName;
  // const api = "1a77faa97b83dd6e0aacaf4181f4a08f";
  const units = "metric";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=${units}`;

  https.get(url, function (response) {
    response.on("data", function (data) {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const icon = weatherData.weather[0].icon;
      const description = weatherData.weather[0].description;
      const weatherImage = `http://openweathermap.org/img/wn/${icon}@2x.png`;
      res.write(`<h1>The temperature in ${city} is ${temp}</h1>`);
      res.write(`<h2>${description}</h2>`);
      res.write(`<img src=${weatherImage} alt="weatheriamge"/>`);
      res.send();
    });
  });
});

app.listen(3000, () => {
  console.log(`Example app listening on port 3000.`);
});
