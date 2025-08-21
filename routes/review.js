const express = require ("express");
const router = express. Router({mergeParams : true});
const wrapAsync = require("../utils/wrapAsync.js");
const {validateReview, isLoggedIn, isReviewAuthor} = require("../middleware.js");
const ReviewController = require("../controller/reviews.js");

//review route
router.post("/",isLoggedIn, validateReview, wrapAsync(ReviewController.createReview));

//Delete route
router.delete("/:reviewId",isLoggedIn ,isReviewAuthor , wrapAsync(ReviewController.deleteReview));

module.exports = router;