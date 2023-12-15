// DEPENDENCIES
const express = require("express");
const router = express.Router();

// CONTROLLER IMPORT
const moviesCtrl = require("../controllers/movies");

// ROUTES
// index (GET) - /movies
router.get("/", moviesCtrl.index);
// router.get("/", async (req, res) => {
// 	res.status(200).json({message: "movies index route"})
// });

// show (GET) - /movies/:id
router.get("/:id", async (req, res) => {
  res.status(200).json({ message: "movies show route" });
});

module.exports = router;
