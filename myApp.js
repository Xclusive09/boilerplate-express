require('dotenv').config();

const express = require("express");
const app = express();
const path = require("path");

const publicRepo = path.join(__dirname, "public");

app.use("/json", express.static(publicRepo));

const handler = (req, res) => {
  const message = "Hello json";

  if (process.env.MESSAGE_STYLE === "HELLO JSON") {
    message = "Hello json".toUpperCase();
  }

  res.json({ message });
};

app.get("/json", handler);

module.exports = app;
