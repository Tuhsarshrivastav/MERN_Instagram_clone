const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const requireLogin = require("../middlewares/requireLogin");

router.get("/protected", requireLogin, (req, res) => {
  res.send("hello user");
});
router.post("/signup", (req, res) => {
  const { name, email, password } = req.body;
  if (!name) {
    return res.status(422).json({ error: "Please Add Name" });
  } else if (!email) {
    return res.status(422).json({ error: "Please Add Email" });
  } else if (!password) {
    return res.status(422).json({ error: "Please Add Password" });
  }
  User.findOne({ email: email })
    .then((savedUser) => {
      if (savedUser) {
        return res
          .status(422)
          .json({ error: "user already exists with that email" });
      }
      bcrypt.hash(password, 10).then((hashedpassword) => {
        const user = new User({
          name,
          email,
          password: hashedpassword,
        });
        user
          .save()
          .then((user) => {
            res.status(201).json({ message: "Saved Successfully" });
          })
          .catch((err) => {
            console.log(err);
          });
      });
    })

    .catch((err) => {
      console.log(err);
    });
});
router.post("/signin", (req, res) => {
  const { email, password } = req.body;
  if ((!email, !password)) {
    return res.status(422).json({ error: "please add email or password" });
  }
  User.findOne({ email }).then((savedUser) => {
    if (!savedUser) {
      return res.status(422).json({ error: "Invalid Email or password" });
    }
    bcrypt
      .compare(password, savedUser.password)
      .then((domatch) => {
        if (domatch) {
          const token = jwt.sign({ id: savedUser._id }, "hmm");
          res.json({ token });
        } else {
          return res.status(422).json({ error: "Invalid Email or password" });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
});
module.exports = router;
