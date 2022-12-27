import express from "express";
import bodyParser from "body-parser";
//import * as mongoose from "mongoose";           //ERR: useNewUrlParser showing err when importing mongoose
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.use("/blog", require("./controllers/blog.controller"));

app.listen(process.env.PORT, () => {
  console.log(`listening to port 3000....${process.env.PORT}`);
});

mongoose.set("strictQuery", false);
mongoose.connect(
  "mongodb+srv://interns:interns123@cluster0.3th3cwn.mongodb.net/blog",
  //process.env.DB_CONNECTION,                    // ERR : env showing error
  { useNewUrlParser: true },
  (err: any) => {
    if (err) {
      console.log(err);
    }
    console.log("database connected.....");
  }
);
