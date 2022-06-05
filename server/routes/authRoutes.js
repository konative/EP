import express from "express";
import { closeClientConn, getColl } from "../db/conn.js";
const router = express.Router();

router.post("/login", async (req, res) => {
  const userColl = await getColl("Users");
  await userColl.insertOne({
    usrName: "John Doe",
    usrDept: "Sales",
    usrTitle: "Executive Account Manager",
    authLevel: 4,
    authDept: ["Sales", "Customers"],
  });

  // Get the username, password
  const { username, name, title } = req.body;

  // Look for user in DB

  //If !user return error

  //Else retrieve user password

  //Compare password, if match return success

  //Issue token upon success

  //Else return error

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
  const { username, name, title } = req.body;
  //Get username, check if exists, handle
  res.send("signup");
  //Create user model w/ data
});

export default router;
