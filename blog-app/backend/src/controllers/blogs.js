const Blog = require("../models/blogModel");

const createBlogs = async (req, res) => {
  try {
    const blog = new Blog({
      authorId: req.body.authorId,
      categoryId: req.body.categoryId,
      readTime: req.body.readTime,
      title: req.body.title,
      description: req.body.description,
      image: req.body.image,
      content: req.body.content,
    });
    const newBlog = await blog.save();
    res.status(201).json({ message: "New blog created!", data: newBlog });
  } catch (error) {
    res.status(500).json({ message: error.message, data: [] });
  }
};

const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json({ message: "Return all blogs!", data: blogs });
  } catch (error) {
    res.status(500).json({ message: error.message, data: [] });
  }
};

const getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (blog) {
      res.status(200).json({ message: "Return blog by ID!", data: blog });
    } else {
      res.status(404).json({ message: "Blog not found!", data: [] });
    }
  } catch (error) {
    res.status(500).json({ message: error.message, data: [] });
  }
};

const getBlogsByCategoryId = (req, res) => {
  console.log(req.params.id);
  res.status(200).json({
    message: "Get blogs by categoryID!",
    data: [],
  });
};

const updateBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (blog) {
      blog.authorId = req.body.authorId || blog.authorId;
      blog.categoryId = req.body.categoryId || blog.categoryId;
      blog.title = req.body.title || blog.title;
      blog.description = req.body.description || blog.description;
      blog.image = req.body.image || blog.image;
      blog.content = req.body.content || blog.content;
      const updatedBlog = await blog.save();
      res.status(200).json({ message: "Blog updated!", data: updatedBlog });
    } else {
      res.status(404).json({ message: "Blog not found!", data: [] });
    }
  } catch (error) {
    res.status(500).json({ message: error.message, data: [] });
  }
};

const deleteBlogById = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (blog) {
      return res.status(200).json({ message: "Blog deleted!" });
    } else {
      return res.status(404).json({ message: "Blog not found!" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createBlogs,
  getBlogs,
  getBlogById,
  getBlogsByCategoryId,
  updateBlogById,
  deleteBlogById,
};