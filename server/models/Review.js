const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
  reviewer: { type: String, required: true },
  reviewText: { type: String, required: true },
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Review", ReviewSchema);