// server.js
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import databaseHelper from '../db/helpers/database';

// routes
import tasksRouter from "../../routes/tasksRoute";
import userRouter from "../../routes/userRoute";

dotenv.config();

const app = express();

// connect to DB
databaseHelper.connect();

// middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get("/", (req, res) => {
  return res.status(200).send({ message: "Welcome!" });
});

app.use(tasksRouter);
app.use(userRouter);

// Setup Server Port
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening to ${port}`));

export default app;
