const express = require("express");
const router = express.Router();
const Traveller = require("../models/Traveller");

router.use(express.json({ strict: true }));

router.get("/", async (req, res) => {
  try {
    const travellers = await Traveller.find();
    res.status(200).json(travellers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const newTraveller = new Traveller(req.body);
    const savedTraveller = await newTraveller.save();
    res.status(200).json(savedTraveller);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
