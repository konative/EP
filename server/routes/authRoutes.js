import express from "express";
import { closeClientConn, getColl } from "../db/conn.js";
import { issueJWT } from "../config/passportJWTConfig.js";
import { createUser } from "../util/DB/users.js";
const router = express.Router();

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.json({ success: false, message: "Email or Password cannot be null" });
    return;
  }
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
  if (!email || !password) {
    res.json({ success: false, message: "Email or Password cannot be null" });
    return;
  }
  //Search DB for Email if it already exists
  const newUser = await createUser(email, password);
  // console.log(newUser);
  // console.log(!newUser.success);
  // console.log(newUser.success);
  //console.log(newUser.error.error);

  if (newUser.success === false) {
    return res.json(newUser);
  }
  try {
    var user = { email, _id: newUser.insertedId };
    var issuedToken = issueJWT(user);
    //console.log("TEEESSTTT");
    res.json({
      success: true,
      token: issuedToken.token,
      expiresIn: issuedToken.expires,
    });
  } catch (error) {
    res.json({ success: false, message: "Failed to Sign Up.", error });
  }

  await closeClientConn();
});

export default router;
