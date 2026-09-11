const express = require("express");
const Blog = require("../models/Blog");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Create Blog
router.post("/create", authMiddleware, async (req, res) => {
    try {
        const { title, content } = req.body;

        const blog = new Blog({
            title,
            content,
            author: req.user.name,
            userId: req.user.id
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


// Get Only Logged-in User's Blogs
router.get("/", authMiddleware, async (req, res) => {
    try {
        const blogs = await Blog.find({
            userId: req.user.id
        });

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


// Update Blog
router.put("/:id", authMiddleware, async (req, res) => {
    try {
        const { title, content } = req.body;

        const blog = await Blog.findOneAndUpdate(
            {
                _id: req.params.id,
                userId: req.user.id
            },
            {
                title,
                content,
                author: req.user.name
            },
            {
                new: true
            }
        );

        if (!blog) {
            return res.status(404).json({
                message: "Blog not found or access denied"
            });
        }

        res.json({
            message: "Blog updated successfully",
            blog: blog
        });

    } catch (error) {
        res.status(500).json({
            message: "Blog update failed"
        });
    }
});


// Delete Blog
router.delete("/:id", authMiddleware, async (req, res) => {
    try {
        const blog = await Blog.findOneAndDelete({
            _id: req.params.id,
            userId: req.user.id
        });

        if (!blog) {
            return res.status(404).json({
                message: "Blog not found or access denied"
            });
        }

        res.json({
            message: "Blog deleted successfully"
        });

    } catch (error) {
        res.status(500).json({
            message: "Blog deletion failed"
        });
    }
});


module.exports = router;