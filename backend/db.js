const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://satheshyadav:sathish20@cluster0.sgurekn.mongodb.net/blogDB?appName=Cluster0");
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.log("MongoDB connection failed:", error.message);
    }
};

module.exports = connectDB;