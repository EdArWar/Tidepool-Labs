const { Schema, model, ObjectId } = require("mongoose");

const SearchWordsSchema = new Schema({
  word: String,
  count: { type: Number, default: 1 },
});

module.exports = model("SearchWords", SearchWordsSchema);
