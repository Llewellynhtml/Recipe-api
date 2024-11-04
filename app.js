
const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const recipeRoutes = require('./Routes/recipeRoutes');
require("dotenv").config();

const app = express();
connectDB();

app.use(bodyParser.json());
app.use("/api", recipeRoutes);

app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

module.exports = app;
