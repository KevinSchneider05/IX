const express = require("express");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT||8000;
const connectDB = require("./database/db");

const blogsRoutes = require("./routes/blogs");

connectDB();

const app = express();

// Enabling CORS for any unknown origin
app.use(cors());

// Enabling the use of JSON for the body of the request
app.use(express.json());

app.use("/api/blogs", blogsRoutes);
app.use("/api/categories", blogsRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});