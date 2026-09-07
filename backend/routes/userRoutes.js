const express = require("express");
const User = require("../models/User");

const router = express.Router();

// Register
router.post("/register", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const user = new User({
            name,
            email,
            password
        });

        await user.save();

        res.json({
            message: "User registered successfully"
        });

    } catch (error) {
        res.status(500).json({
            message: "Registration failed"
        });
    }
});

// Login
router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email, password });

    if (user) {
        res.json({
            message: "Login successful"
        });
    } else {
        res.status(401).json({
            message: "Invalid email or password"
        });
    }
});

module.exports = router;