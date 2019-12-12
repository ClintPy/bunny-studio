// Server.js
const dotenv = require("dotenv");

const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const mongoose = require('mongoose');

dotenv.config()

// DB
const db = require('./config/database')

db.connect()
// Listening Port
const port = process.env.PORT || 3000;

// Routes
const userRouter = require("./routes/userRoute");
const tasksRouter = require("./routes/tasksRoute");


//parse application/json and look for raw text
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/json" }));

app.get("/", (req, res) =>
  res.json({ message: "Bunny Studio FullStack Engineering Test!" })
);

app.use(cors)

// routes middleware
app.use(userRouter);
app.use(tasksRouter);

app.listen(port, () => console.log(`Listening on ${port}`));

module.exports = app; // for testing
