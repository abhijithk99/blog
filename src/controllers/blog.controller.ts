import * as express from "express";
import { Request, Response } from "express";
const { newBlog } = require("../services/blog.service");
const router = express.Router();

router.get("/", (req: Request, res: Response) => {});

router.post("/", async (req: Request, res: Response) => {
  const blog = await newBlog({
    title: req.body.title,
    author: req.body.author,
    // authorImage: req.body.authorImage,
    content: req.body.content,
  });
  res.status(200).send(blog.data);
});

module.exports = router;
