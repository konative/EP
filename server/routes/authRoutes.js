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

  //Search DB for Email if it already exists
  const userColl = await getColl("Users");
  try {
    let result = await userColl.insertOne({
      email,
      password,
    });
    console.log(result);
  } catch (error) {
    console.log("err: ");
    console.log(error.code);
    //If code == 11000 res in message that its duplicate email
    //else just say failed sucks 2 b u
  }

  await closeClientConn();
  //If not create and save email and hashed password to DB and get _id from DB

  // user = {email, id}
  //Call token = issueJWT(user)
  // res.json({ success: true, token: token });
  res.send("hi");
  //else res.json({success:false})
});

export default router;
