import express from "express";
import { closeClientConn, getColl } from "../db/conn.js";
import { issueJWT } from "../config/passportJWTConfig.js";
const router = express.Router();

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const userColl = await getColl("Users");
  try {
    let result = await userColl.findOne({ email });
    console.log(result);
    if (!result) {
      res.json({ success: false, message: "User not found" });
    } else if (result && result.password != password) {
      res.json({ success: false, message: "Incorrect password" });
    } else {
      var user = { email, _id: result.insertedId };
      var issuedToken = issueJWT(user);
      res.json({
        success: true,
        token: issuedToken.token,
        expiresIn: issuedToken.expires,
      });
    }
  } catch (error) {
    console.log(error);
    if (error) {
      res.json({ success: false, message: "Login Failed", error });
    }
  }
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
    var user = { email, _id: result.insertedId };
    var issuedToken = issueJWT(user);
    res.json({
      success: true,
      token: issuedToken.token,
      expiresIn: issuedToken.expires,
    });
  } catch (error) {
    if (error.code == 11000) {
      res.json({ success: false, message: "Email already exists.", error });
    } else {
      res.json({ success: false, message: "Failed to Sign Up.", error });
    }
  }

  await closeClientConn();
});

export default router;
