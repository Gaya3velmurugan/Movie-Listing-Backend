const mongoose = require("mongoose");

const connectDB = async () =>{
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('MongoDB connected.......');
    } catch (err) {
        console.error("MomgoDB connection error:", err);
        throw err;
    }
    }



module.exports = connectDB;