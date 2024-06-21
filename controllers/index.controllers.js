const axiosInstance = require("../api/axiosInstance");

// Helper function to build query string
const buildQueryString = (params) => {
  return new URLSearchParams(params).toString();
};

// Helper function to fetch data from the API
const fetchData = async (endpoint, params, res) => {
  const queryString = buildQueryString(params);
  try {
    const response = await axiosInstance.get(`${endpoint}?${queryString}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getTopHeadlines = (req, res) => {
  const { country, page, category } = req.query;
  const params = { country, page, category };
  if (!category) delete params.category;

  fetchData("/top-headlines", params, res);
};

const getPopularHeadlines = (req, res) => {
  const { language, sortBy, q } = req.query;
  const params = { language, sortBy, q };

  fetchData("/everything", params, res);
};

const getArticlesByCategory = (req, res) => {
  const { country, page, category } = req.query;
  const params = { country, page, category };
  if (!category) delete params.category;

  fetchData("/top-headlines", params, res);
};

const searchArticlesByQuery = (req, res) => {
  const { q, page } = req.query;
  const params = { q, page };

  fetchData("/everything", params, res);
};

module.exports = {
  getTopHeadlines,
  getPopularHeadlines,
  getArticlesByCategory,
  searchArticlesByQuery,
};
