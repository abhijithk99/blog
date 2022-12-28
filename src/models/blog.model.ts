import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  AuthorImage: {
    data: Buffer,
    contentType: String,
  },
  datePosted: {
    type: Date,
    required: true,
  },
  content: {
    type: String,
    //required: true,
  },
});

const Blog = mongoose.model("blog", blogSchema);
module.exports = { Blog };
