import express from "express";
import passport from "passport";
import { loginUser, registerUser } from "../controllers/users.js";
const router = express.Router();

router.post("/login", async (req, res) => {
  loginUser(req, res);
});

router.post("/logout", async (req, res) => {
  //Get token
  res.send("logout");
  //Revoke token
});

router.post("/signup", async (req, res) => {
  registerUser(req, res);
});

router.get(
  "/protected",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.send("potato");
  }
);

export default router;
