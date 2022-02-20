const express = require("express");
const mongoose = require("mongoose");
const config = require("config");

const app = express();
const PORT = config.get("PORT");

const start = async () => {
  try {
    await mongoose.connect(config.get("dbUrl"), {
      useNewUrlParser: true,
      useUnifiedTopology: false,
    });

    app.listen(PORT, () => {
      console.log(`Server Started on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
