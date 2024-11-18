const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const AuthRouter = require("./routes/AuthRouter");
const ProductRouter = require("./routes/ProductRouter");

require("dotenv").config();
require("./models/db");
const PORT = process.env.PORT || 8080;

const corsOptions = {
  origin: "https://user-authentication-jxfvax8wr-niru1pam2s-projects.vercel.app", // Frontend domain
  methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
  allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
  credentials: true, // If you're using cookies or authorization headers
};

//middlewares
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use("/auth", AuthRouter);
app.use("/products", ProductRouter);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
