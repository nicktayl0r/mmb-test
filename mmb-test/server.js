const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.post("/api/reverseString", function(req, res) {
  let string = req.body.string
    .split("")
    .reverse()
    .join("");
  res.json(string);
});

app.post("/api/backendAPI", function(req, res) {
  console.log(req.body);
  //if request is a get then run get function, if it is a post then run the post
  res.json("hello");
});

app.listen(port, () => console.log(`Listening on port ${port}`));
