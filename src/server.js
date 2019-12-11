// server.js
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";

// routes
import tasksRouter from "../routes/tasksRoute";
import userRouter from "../routes/userRoute";

dotenv.config();

const app = express();

const DB_NAME = process.env.DB_NAME || "root"; // In production I'll omit the hard-coded name
const DB_PWD = process.env.DB_PWD || "eastood";

const DEV_CONNECTION_URI = `mongodb+srv://${DB_NAME}:${DB_PWD}@cluster0-nsnkg.mongodb.net/dev?retryWrites=true&w=majority`;

// middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connect to Mongodb
mongoose.connect(DEV_CONNECTION_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});
const db = mongoose.connection;

if (!db) console.log("Error Connecting to DB!");
else console.log("DB Connected Successfully!");

app.get("/", (req, res) => {
  return res.status(200).send({ message: "Welcome!" });
});

app.use(tasksRouter);
app.use(userRouter);

// Setup Server Port
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening to ${port}`));

export default app;
