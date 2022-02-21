const express = require("express");
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload");
const corsMiddleware = require("./middleware/cors.middleware");
const PostRoutes = require("./routes/PostRoutes");
const SearchRoutes = require("./routes/SearchRoutes");

const config = require("config");

const app = express();
const PORT = config.get("PORT");

app.use(fileUpload({}));
app.use(corsMiddleware);
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(express.static("static"));

app.use("/api/posts", PostRoutes);
app.use("/api/search", SearchRoutes);

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
