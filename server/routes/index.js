import express from "express";
const router = express.Router();
import authRoutes from "./usersRoutes.js";

router.use("/users", authRoutes);

export default router;
