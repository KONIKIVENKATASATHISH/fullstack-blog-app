const express = require("express");
const Blog = require("../models/Blog");

const router = express.Router();

// Create Blog
router.post("/create", async (req, res) => {
    try {
        const { title, content, author } = req.body;

        const blog = new Blog({
            title,
            content,
            author
        });

        await blog.save();

        res.json({
            message: "Blog created successfully",
            blog: blog
        });

    } catch (error) {
        res.status(500).json({
            message: "Blog creation failed"
        });
    }
});

// Get All Blogs
router.get("/", async (req, res) => {
    try {
        const blogs = await Blog.find();

        const formattedBlogs = blogs.map(blog => ({
            id: blog._id,
            title: blog.title,
            content: blog.content,
            author: blog.author
        }));

        res.json(formattedBlogs);

    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch blogs"
        });
    }
});

// Get Single Blog
router.get("/:id", async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);

        if (!blog) {
            return res.status(404).json({
                message: "Blog not found"
            });
        }

        res.json(blog);

    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch blog"
        });
    }
});

module.exports = router;