import "dotenv/config";
import express, { Request, Response } from "express";
import axios from "axios";

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
