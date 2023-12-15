// DEPENDENCIES

// initialize .env variables
require("dotenv").config();

// start mongoose db connection
require("./config/db.connection");

// pull PORT from .env, give default value of 4000 and establish DB Connection
const { PORT } = process.env;

// import express
const express = require("express");

// create application object
const app = express();

// ROUTES
// create a test route
app.get("/", (req, res) => {
  res.send("MERN Hackathon - Movies");
});

// LISTENER
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
