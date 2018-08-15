const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/api/reverseString", function(req, res) {
  let string = req.body.string
    .split("")
    .reverse()
    .join("");
  res.send({ string: string });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
