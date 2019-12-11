// server.js
import express from "express";
import mongoose from "mongoose";
import bodyPaser from "body-parser";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const DB_NAME = process.env.DB_NAME || "root"; // In production I'll omit the hard-coded name
const DB_PWD = process.env.DB_PWD || "eastood";

const DEV_CONNECTION_URI = `mongodb+srv://${DB_NAME}:${DB_PWD}@cluster0-nsnkg.mongodb.net/dev?retryWrites=true&w=majority`;

// Connect to Mongodb
mongoose.connect(DEV_CONNECTION_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});
const db = mongoose.connection;

if (!db) console.log("Error Connecting to DB!");
else console.log("DB Connected Successfully!");

app.use(bodyPaser.json());

app.get("/", (req, res) => {
  return res.status(200).send({ message: "Welcome!" });
});

// Setup Server Port
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening to ${port}`));

export default app;
