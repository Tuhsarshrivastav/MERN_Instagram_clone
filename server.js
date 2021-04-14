require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");

require("./models/user");

mongoose.connect(process.env.DB_URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  mongoose.connection.on("connected", () => {
    console.log("----Mongodb--Connected-----");
  });
  mongoose.connection.on("error", () => {
    console.log("----Mongodb--Connecting--Error-----");
  });



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on:${PORT}`);
});