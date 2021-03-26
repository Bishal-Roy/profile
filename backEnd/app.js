const express = require("express");
require("./config/db");
const dotenv = require("dotenv");
const router = require("./router/userRouter");

dotenv.config();

const app = express();


app.use(express.json());
app.use(router);

app.get("/", (req, res) => {
  res.send("welcome to home page");
});
app.get("/about", (req, res) => {
  res.send("Welcome to about page");
});
app.get("/contact", (req, res) => {
  res.send("Welcome to contact page");
});
app.get("/login", (req, res) => {
  res.send("Welcome to login page");
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`listinning on port ${port}`);
});
