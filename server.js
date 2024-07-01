require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");
const morgan = require("morgan");

const apiRoutes = require("./routes/index.route");

const allowedOrigins =
  process.env.NODE_ENV === "production"
    ? [process.env.FRONTEND_ORIGIN]
    : [`http://localhost:${port}`];

app.use(
  cors({
    origin: (origin, callback) => {
      if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);

app.use(morgan("tiny"));

app.use("/api", apiRoutes);

app.listen(port, () => {
  console.log("server is running");
});
