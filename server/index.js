import {} from "dotenv/config";
import express from "express";
const app = express();
const port = process.env.PORT;
import { closeClientConn, getDb } from "./db/conn.js";

app.get("/login", async (req, res) => {
  try {
    let log = await getDb();
    console.log(log);
    await closeClientConn();
  } catch (error) {
    console.log(error);
  }
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
