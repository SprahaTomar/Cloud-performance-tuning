const express = require('express');
const router = express.Router();
const BlogPost = require('./models/Blogpost'); // Assuming your BlogPost model is in the same directory as this file

// Route for creating a new blog post
router.post('/create', async (req, res) => {
  try {
    const { title, content, author } = req.body;
    const newBlogPost = new BlogPost({ title, content, author });
    await newBlogPost.save();
    res.status(201).json({ message: 'Blog post created successfully' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route for retrieving all blog posts
router.get('/all', async (req, res) => {
  try {
    // Implement logic to retrieve all blog posts from the database
    const allBlogPosts = await BlogPost.find();
    res.json(allBlogPosts);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
