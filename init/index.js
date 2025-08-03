const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MongoURL = "mongodb://127.0.0.1:27017/wanderLust";

main().then(()=>{
    console.log("connected to db");
}).catch((err)=>{
    console.log(err);
})
async function main(){
    await mongoose.connect(MongoURL);
}

const initDB = async() =>{
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
};

initDB();