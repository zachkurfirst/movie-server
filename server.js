// DEPENDENCIES

// initialize .env variables
require("dotenv").config();

// start mongoose db connection
require("./config/db.connection");

// pull PORT from .env, give default value of 4000 and establish DB Connection
const { PORT } = process.env;

// import express
const express = require("express");
const cors = require("cors"); // print logs
const morgan = require("morgan"); // allow react access

// create application object
const app = express();

// import movies router
const moviesRouter = require("./routes/movies");

// MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // parse JSON

app.use(cors());
app.use(morgan("dev"));

// all requests for endpoints beginning with '/movies'
app.use("/movies", moviesRouter);

// ROUTES
// create a test route
app.get("/", (req, res) => {
  res.send("MERN Hackathon - Movies");
});

// LISTENER
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
