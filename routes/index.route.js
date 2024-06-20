const express = require("express");
const router = express.Router();
const axiosInstance = require("../api/axiosInstance");

// get latest headlines
router.get("/top-headlines", async (req, res) => {
  const { country, page, category } = req.query;
  const params = {
    country,
    page,
    category,
  };

  if (!category) {
    delete params.category;
  }

  const queryString = new URLSearchParams(params).toString();

  const response = await axiosInstance.get(`/top-headlines?${queryString}`);

  const data = response.data;
  res.json(data);
});

// get popular headlines
router.get("/popular-headlines", async (req, res) => {
  const { language, sortBy, q } = req.query;
  const params = {
    q,
    language,
    sortBy,
  };

  const queryString = new URLSearchParams(params).toString();

  const response = await axiosInstance.get(`/everything?${queryString}`);

  const data = response.data;
  res.json(data);
});

// get articles by category
router.get("/article-category", async (req, res) => {
  const { country, page, category } = req.query;
  const params = {
    country,
    page,
    category,
  };

  if (!category) {
    delete params.category;
  }

  const queryString = new URLSearchParams(params).toString();

  const response = await axiosInstance.get(`/top-headlines?${queryString}`);

  const data = response.data;
  res.json(data);
});

// search article by query
router.get("/search", async (req, res) => {
  const { q, page } = req.query;
  const params = {
    q,
    page,
  };

  const queryString = new URLSearchParams(params).toString();

  console.log({ queryString });

  const response = await axiosInstance.get(`/everything?${queryString}`);

  const data = response.data;
  res.json(data);
});

module.exports = router;
