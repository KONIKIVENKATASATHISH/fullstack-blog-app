const express = require("express");
const cors = require("cors");
const connectDB = require("./db");

const app = express();
connectDB();

app.use(express.json());
app.use(cors());

const userRoutes = require("./routes/userRoutes");
const blogRoutes = require("./routes/blogRoutes");

app.use("/api/users", userRoutes);
app.use("/api/blogs", blogRoutes);

app.get("/", (req, res) => {
    res.send("Blog Application Backend is running!");
});

app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});