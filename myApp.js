let express = require("express");
let app = express();

app.get("/", (req, res) => {
  const responseString = "Hello Express";
  console.log(responseString);
  res.send(responseString);
});

module.exports = app;
