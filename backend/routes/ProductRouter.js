const express = require("express");
const ensureAuthenticated = require("../middlewares/Auth");

const router = express.Router();

router.get("/", ensureAuthenticated, (req, res) => {
  res.status(200).json([
    {
      name: "dress",
      price: 10000,
    },
    {
      name: "shoes",
      price: 20000,
    },
  ]);
});

module.exports = router;
