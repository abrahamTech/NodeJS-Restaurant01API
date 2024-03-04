import { Router } from "express";
import { login, logout, profile, register } from "../controllers/auth.controller.js";
import { authenticateToken } from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { registerSchema, loginSchema } from "../schemas/auth.schema.js";

const router = Router();

router.post("/register", validateSchema(registerSchema), register);
router.post("/login", validateSchema(loginSchema), login);
router.post("/logout", logout);
router.get("/profile", authenticateToken, profile);

export default router;