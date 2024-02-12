require('dotenv').config();

const express = require("express");
const app = express();
const path = require("path");

const publicRepo = path.join(__dirname, "public");
app.use("/json", express.static(publicRepo));


app.get('/json', function(req, res){

  if(process.env.MESSAGE_STYLE==='uppercase'){
    res.json({
    "message": "HELLO JSON"
  })
  } else {
      res.json({
    "message": "Hello json"
  })
    };
  });

module.exports = app;
