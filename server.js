const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());

app.use("/api", require("./api"));

app.use(express.static(path.join(__dirname, "views")));
app.use("/n320nodejs", express.static(path.join(__dirname, "views")));

app.listen(13883);

console.log("Running: http://localhost:13883");
