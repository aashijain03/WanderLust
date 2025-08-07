const mongoose = require("mongoose");
const review = require("./review");
const { ref } = require("joi");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title : {
        type: String,
        required : true
    },
    description : String,
    image: {
        filename: {
            type: String,
            default: "default"
        },
        url: {
            type: String,
            default: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1170&q=80",
            set: v => v === "" ? "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixid=Mnwx...&auto=format&fit=crop&w=1170&q=80" : v
        }
    },    
    price : Number,
    location : String,
    country : String,
    reviews : [
        {
            type : mongoose.Schema.ObjectId,
            ref : "Review"
        }
    ],
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;