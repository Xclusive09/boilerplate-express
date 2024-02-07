let express = require("express");
let app = express();
const path = require("path");

const absolutePath = path.join(__dirname, "views", "index.html");

app.get("/", (req, res) => {
  res.sendFile(absolutePath);
});

module.exports = app;

module.exports = app;
