const express = require("express");
const Review = require("../models/Review");
const Product = require("../models/Product");

const router = express.Router();

router.get("/:productId", async (req, res) => {
  try {
    const reviews = await Review.find({ product: req.params.productId });
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

router.post("/:productId", async (req, res) => {
  try {
    const { reviewer, reviewText } = req.body;

    const product = await Product.findById(req.params.productId);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    const newReview = new Review({
      reviewer,
      reviewText,
      product: req.params.productId,
    });

    await newReview.save();
    res.status(201).json(newReview);
  } catch (err) {
    res.status(400).json({ error: "Invalid data" });
  }
});

module.exports = router;