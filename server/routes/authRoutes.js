import e from "express";
import express from "express";
import { closeClientConn, getColl } from "../db/conn.js";
const router = express.Router();

router.post("/login", async (req, res) => {
  const userColl = await getColl("Users");
  let result;

  console.log(JSON.stringify(simp?.insertedId));
  res.send("login");

  //Close connection at end?
  await closeClientConn();
});

router.post("/logout", async (req, res) => {
  //Get token
  res.send("logout");
  //Revoke token
});

router.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  //Get username, check if exists, handle
  res.send("signup");
  //Create user model w/ data
});

export default router;
