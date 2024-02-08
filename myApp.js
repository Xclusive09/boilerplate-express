require('dotenv').config();

const express = require("express");
const app = express();
const path = require("path");

const publicRepo = path.join(__dirname, "public");

app.use("/json", express.static(publicRepo));

const handler = (req, res) => {
  let message = process.env.MESSAGE_STYLE;


  res.json({ message });
};

app.get("/json", handler);

module.exports = app;
