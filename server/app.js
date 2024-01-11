const express = require("express");
const cors = require("cors");
const app = express();
const port = 4000;

require("dotenv").config();
const url = process.env.DB_URL;
const dbName = "pitchin-db";
const mongoose = require("mongoose");
const { createAccount } = require("./controllers/auth.controller");

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

try {
  mongoose.connect(url, {
    dbName: dbName,
  });
  console.log("Connected to the database");
} catch (e) {
  console.error(e);
  process.exit(1);
}

// Define a route
app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

// User
app.post("/api/auth/signup", createAccount);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
