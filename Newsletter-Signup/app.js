const bodyParser = require("body-parser");
const express = require("express");
const https = require("https");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;

  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
        },
      },
    ],
  };

  const jsonData = JSON.stringify(data);

  const url = "https://${dc}.api.mailchimp.com/3.0/ping";

  https.request(url, options, function (response) {});

  res.send(
    `Hello ${firstName} ${lastName}, thank you for subscribing to our newsletter.`
  );
});

app.listen(3000, () => {
  console.log(`Server is running on 3000`);
});

// API
// ef0485767c67b7f6be10c7d12d51037f - us12;

// ID
// 5d58e71543
