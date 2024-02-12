require('dotenv').config();

const express = require("express");
const app = express();
const path = require("path");

const publicRepo = path.join(__dirname, "public");
app.use("/json", express.static(publicRepo));

app.get("/json", (req, res) => {
  let message = "Hello json";

  if (process.env.MESSAGE_STYLE === "uppercase") {
    message = message.toUpperCase();
  }

  res.json({ message });
});

module.exports = app;
