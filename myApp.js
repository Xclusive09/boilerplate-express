let express = require("express");
let app = express();
const path = require("path");

const absolutePath = path.join(__dirname, "views", "index.html");

app.get("/", (req, res) => {
  res.sendFile(absolutePath);
});

const staticFiles = path.join(__dirname, "public");
app.use("/public", express.static(staticFiles));

app.use(staticFiles);

module.exports = app;

module.exports = app;
