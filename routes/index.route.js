const express = require("express");
const router = express.Router();
const {
  getTopHeadlines,
  getPopularHeadlines,
  getArticlesByCategory,
  searchArticlesByQuery,
} = require("../controllers/index.controllers");

// get latest headlines
router.get("/top-headlines", getTopHeadlines);

// get popular headlines
router.get("/popular-headlines", getPopularHeadlines);

// get articles by category
router.get("/article-category", getArticlesByCategory);

// search article by query
router.get("/search", searchArticlesByQuery);

module.exports = router;
