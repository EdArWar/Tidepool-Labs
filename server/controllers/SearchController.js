const SearchWords = require("../models/SearchWords");

class SearchController {
  async getSearchWords(req, res) {
    try {
      const words = await SearchWords.find();
      res.status(200).json(words);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new SearchController();
