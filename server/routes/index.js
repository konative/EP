import express from "express";
const router = express.Router();
import authRoutes from "./authRoutes.js";

router.use("/users", authRoutes);

export default router;
