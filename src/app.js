// Importing Dependencies
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// Allowing cross-domain requests
app.use(cors());

// Routes
app.get("/", (req, res) => {
  res.json({ Message: "Welcome to Tour App" });
});

// Database Connection
mongoose
  .set("strictQuery", true)
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("db connection established");
  });

// Listen on port
const port = process.env.PORT || 8080;
const server = app.listen(port, (error) =>
  error ? console.log(error) : console.log(`Server is running on port ${port}`)
);
