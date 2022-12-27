const { Blog } = require("../models/blog.model");

type Blog = {
  title: String;
  author: String;
  authorImage: Buffer;
  datePosted: Date;
  content: String;
};

const newBlog = async ({
  title,
  author,
  //authorImage,
  content,
}: Blog) => {
  const newBlog = new Blog({
    title: title,
    author: author,
    //authorImage: authorImage,
    datePosted: new Date(),
    content: content,
  });
  const blog = await newBlog.save();
  return {
    status: 200,
    message: "blog posted successfully",
    data: blog,
  };
};

module.exports = { newBlog };
