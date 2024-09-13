"use strict";
import { Router } from "express";
import userRoutes from "./user.routes.js";
import authRoutes from "./auth.routes.js";
import archivoRoutes from "./archivo.routes.js";

const router = Router();

router
    .use("/auth", authRoutes)
    .use("/archivo", archivoRoutes)
    .use("/user", userRoutes);

export default router;