const express = require("express");
const app = express();
const path = require("path");
require('dotenv').config();


const publicRepo = path.join(__dirname, "public");

app.use("/json", express.static(publicRepo));

const handler = (req, res) => {
  const jsonData = { message: "Hello json" };

  if(process.env.MESSAGE_STYLE === "uppercase") {
    message = message.toUpperCase();
  }

  res.json(jsonData);
};
app.get("/json", handler);

module.exports = app;
