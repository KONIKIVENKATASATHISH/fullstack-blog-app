const express = require("express");

const router = express.Router();

let blogs = [];

// Create Blog
router.post("/create", (req, res) => {
    const { title, content, author } = req.body;

    const blog = {
        id: blogs.length + 1,
        title,
        content,
        author
    };

    blogs.push(blog);

    res.json({
        message: "Blog created successfully",
        blog: blog
    });
});

// Get All Blogs
router.get("/", (req, res) => {
    res.json(blogs);
});

module.exports = router;