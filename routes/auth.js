const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


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
  