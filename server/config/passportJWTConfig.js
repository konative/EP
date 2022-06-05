import jsonwebtoken from "jsonwebtoken";
import passport from "passport";
import passportJWT from "passport-jwt";
import { ExtractJwt } from "passport-jwt/lib";
import { getColl } from "../db/conn.js";
const JWTStrategy = passportJWT.Strategy;

//JWT Options
const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: "KEY",
};

//Signup Passport Strategy
passport.use(
  "signup",
  new JWTStrategy(options, async (email, password, done) => {
    try {
      const userColl = await getColl("Users");
      result = await userColl.insertOne({
        email,
        password,
      });
      let user = {
        id: result.insertedId,
        email: email,
      };
      return done(null, user);
    } catch (error) {
      if (error.code == 11000) {
        console.log("Email already exists");
      } else {
        console.log("Error creating/saving user");
      }
      done(error, null);
    }
  })
);

//Login Passport Strategy
passport.use(
  "login",
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async (email, password, done) => {
      try {
        const userColl = await getColl("Users");
        const movie = await userColl.findOne({ email: email });
        console.log(movie);
        // if (!user) {
        //   return done(null, false, { message: "User not found" });
        // }

        // const validate = await user.isValidPassword(password);

        // if (!validate) {
        //   return done(null, false, { message: "Wrong Password" });
        // }

        return done(null, user, { message: "Logged in Successfully" });
      } catch (error) {
        return done(error);
      }
    }
  )
);

const issueJWT = (user) => {
  const _id = user._id;
  const expiresIn = "1d";
  const payload = {
    sub: _id,
    iat: Date.now(),
  };

  const signedToken = jsonwebtoken.sign(payload, "KEY", {
    expiresIn: expiresIn,
  });

  return { token: "Bearer " + signedToken, expires: expiresIn };
};

export default passportConfig = () => {
  return;
};
