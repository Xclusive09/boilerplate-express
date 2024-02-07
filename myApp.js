const express = require("express");
const app = express();
const path = require("path");

// const publicDirectoryPath = path.join(__dirname, "public");

// app.use("/public", express.static(publicDirectoryPath));

app.use("/json");

const handler = (req, res) => {
  jsonData = { message: "Hello json" };
  res.json(jsonData);
};
app.get("/json", handler);

module.exports = app;
