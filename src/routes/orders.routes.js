import { Router } from "express";
import { authenticateToken } from "../middlewares/validateToken.js";

const router = Router();

router.get("/orders", authenticateToken, );
router.get("/orders/:id", authenticateToken,);
router.post("/orders", authenticateToken,);
router.delete("/orders/:id", authenticateToken,);
router.put("/orders/:id", authenticateToken,);
export default router;