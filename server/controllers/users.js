import { closeClientConn, getColl } from "../db/conn.js";
import { issueJWT } from "../config/passportJWTConfig.js";
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.json({ success: false, message: "Email or Password cannot be null" });
    return;
  }
  try {
    const userColl = await getColl("Users");
    let result = await userColl.findOne({ email });
    console.log(result);
    if (!result) {
      res.status(400).json({ success: false, message: "User not found" });
    } else if (result && result.password != password) {
      res.status(400).json({ success: false, message: "Incorrect password" });
    } else {
      var user = { email, _id: result.insertedId };
      var issuedToken = issueJWT(user);
      res.status(200).json({
        success: true,
        token: issuedToken.token,
        expiresIn: issuedToken.expires,
      });
    }
    closeClientConn();
  } catch (error) {
    console.log(error);
    if (error) {
      res.status(400).json({ success: false, message: "Login Failed", error });
    }
  }
};

const registerUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res
      .status(400)
      .json({ success: false, message: "Email or Password cannot be null" });
    return;
  }
  //Search DB for Email if it already exists
  const userColl = await getColl("Users");
  try {
    let result = await userColl.insertOne({
      email,
      password,
    });
    var user = { email, _id: result.insertedId };
    var issuedToken = issueJWT(user);
    res.status(200).json({
      success: true,
      token: issuedToken.token,
      expiresIn: issuedToken.expires,
    });
  } catch (error) {
    if (error.code == 11000) {
      res
        .status(400)
        .json({ success: false, message: "Email already exists.", error });
    } else {
      res
        .status(400)
        .json({ success: false, message: "Failed to Sign Up.", error });
    }
  }

  await closeClientConn();
};

export { loginUser, registerUser };
