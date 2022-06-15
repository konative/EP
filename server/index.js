import {} from "dotenv/config";
import express from "express";
import cors from "cors";
const app = express();
const port = process.env.PORT;
import { closeClientConn, getDb } from "./db/conn.js";
import authRoutes from "./routes/authRoutes.js";
import passportConfig from "./config/passportJWTConfig.js";
import passport from "passport";

passportConfig(passport);
app.use(passport.initialize());
app.use(express.json());
app.use(cors());

app.use("/", authRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
