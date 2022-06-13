import jwt from "jsonwebtoken";
const { sign, verify } = jwt;
import passport from "passport";
import { ExtractJwt, Strategy } from "passport-jwt/lib/index.js";
import { getColl } from "../db/conn.js";

//JWT Options
const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: "KEY",
};

//Signup Passport Strategy
// passport.use(
//   "signup",
//   new Strategy(options, async (email, password, done) => {
//     try {
//       const userColl = await getColl("Users");
//       result = await userColl.insertOne({
//         email,
//         password,
//       });
//       let user = {
//         id: result.insertedId,
//         email: email,
//       };
//       return done(null, user);
//     } catch (error) {
//       if (error.code == 11000) {
//         console.log("Email already exists");
//       } else {
//         console.log("Error creating/saving user");
//       }
//       done(error, null);
//     }
//   })
// );

const issueJWT = (user) => {
  const _id = user._id;
  const expiresIn = "1d";
  const payload = {
    sub: _id,
    email: user.email,
    iat: Date.now(),
  };

  const signedToken = jwt.sign(payload, "KEY", {
    expiresIn: expiresIn,
  });

  return { token: "Bearer " + signedToken, expires: expiresIn };
};

const strategy = new Strategy(options, async (payload, done) => {
  try {
    const userColl = await getColl("Users");
    //Email / password check
    const user = await userColl.findOne({ email: email });
    if (user) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  } catch (error) {
    return done(error, null);
  }
});

//passport.authenticate()
const passportConfig = (passport) => {
  passport.use(strategy);
};

export default passportConfig;
export { issueJWT };
