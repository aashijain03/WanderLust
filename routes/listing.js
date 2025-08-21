const express = require ("express");
const router = express. Router ();
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const {isLoggedIn, isOwner, validateListing} = require("../middleware.js");
const ListingController = require("../controller/listings.js");

router.route("/")
    .get(wrapAsync(ListingController.index)) //index route
    .post(validateListing, wrapAsync(ListingController.createListing)); //create route

//new route
router.get("/new",isLoggedIn, ListingController.renderNewForm);

router.route("/:id")
    .get(wrapAsync(ListingController.showListing)) //show route
    .put(validateListing, isOwner ,isLoggedIn, wrapAsync(ListingController.updateListing)) //update route
    .delete(isLoggedIn , isOwner ,wrapAsync(ListingController.deleteListing)); //delete route

//Edit route
router.get("/:id/edit",isLoggedIn, isOwner ,wrapAsync(ListingController.renderEditForm));

module.exports = router;