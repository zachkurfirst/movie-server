// DEPENDENCIES
const express = require("express");
const router = express.Router();

// CONTROLLER IMPORT

// ROUTES
router.get("/", async (req, res) => {
  res.status(200).json({ message: "movies index route" });
});

module.exports = router;
