require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");
const morgan = require("morgan");

const apiRoutes = require("./routes/index.route");
app.use(cors());

app.use(morgan("tiny"));

app.use("/api", apiRoutes);

app.listen(port, () => {
  console.log("server is running");
});
