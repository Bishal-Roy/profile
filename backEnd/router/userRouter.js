const express = require("express");
const router = express.Router();
const User = require("../models/userSchema");

router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;
  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(404).json({ error: "you miss some required fields" });
  }

  try {
    const response = await User.findOne({ email });
    if (response) {
      return res.status(400).json({ error: "email already exists" });
    } else if (password != cpassword) {
      return res.status(400).json({ error: "enter right confirm password" });
    } else {
      const user = new User({ name, email, phone, work, password});
      await user.save();
      res.status(200).json({ message: "successfully registered" });
    }
  } catch (error) {
    console.log(error);
  }
});
router.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(401)
      .json({ error: "please enter your email and password" });
  }
  try {
    const emailexists = await User.findOne({ email });
    if (!emailexists) {
      return res.status(400).json({ error: "invalid entry" });
    } else {
      res.json({ emailexists });
    }
  } catch (error) {
    console.log("error");
  }
});

module.exports = router;
