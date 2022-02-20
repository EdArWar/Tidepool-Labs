const { Schema, model, ObjectId } = require("mongoose");

const PostSchema = new Schema({
  name: String,
  profession: String,
  avatar: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

module.exports = model("Post", PostSchema);
