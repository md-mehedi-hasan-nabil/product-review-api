const express = require("express");
const router = express.Router();
const {
  getReviews,
  addReview,
  getReviewByProductId,
  editReview,
  deleteReview,
} = require("../controllers/Review.controller");

router.get("/", getReviews);
router.get("/:productId", getReviewByProductId);
router.post("/", addReview);
router.put("/:reviewId", editReview);
router.delete("/:reviewId", deleteReview);

module.exports = router;
