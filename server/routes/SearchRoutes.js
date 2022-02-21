const Router = require("express");
const SearchController = require("../controllers/SearchController");
const router = new Router();

router.get("/", SearchController.getSearchWords);

module.exports = router;
