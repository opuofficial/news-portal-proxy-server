const axios = require("axios");

const axiosInstance = axios.create({
  baseURL: "https://newsapi.org/v2",
  headers: { "X-Api-Key": process.env.API_KEY },
  params: {
    pageSize: 10,
  },
});

module.exports = axiosInstance;
