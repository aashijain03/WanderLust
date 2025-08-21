const express = require ("express");
const router = express. Router ();
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const {isLoggedIn, isOwner, validateListing} = require("../middleware.js");
const ListingController = require("../controller/listings.js");


//index route
router.get("/",wrapAsync(ListingController.index));

//new route
router.get("/new",isLoggedIn, ListingController.renderNewForm);

//show route
router.get("/:id",wrapAsync(ListingController.showListing));

//create route
router.post("/",validateListing, wrapAsync(ListingController.createListing));

//Edit route
router.get("/:id/edit",isLoggedIn, isOwner ,wrapAsync(ListingController.renderEditForm));

//update route
router.put("/:id",validateListing, isOwner ,isLoggedIn, wrapAsync(ListingController.updateListing));

//delete route
router.delete("/:id",isLoggedIn , isOwner ,wrapAsync(ListingController.deleteListing));

module.exports = router;