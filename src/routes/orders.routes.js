import { Router } from "express";
import { authenticateToken } from "../middlewares/validateToken.js";

const router = Router();

router.get("/orders", authenticateToken, (req, res) => {
    res.send("Orders Here");
})

export default router;