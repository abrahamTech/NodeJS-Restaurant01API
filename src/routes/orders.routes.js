import { Router } from "express";
import { authenticateToken } from "../middlewares/validateToken.js";
import {getOrders, getOrder, createOrder, updateOrder, deleteOrder} from "../controllers/orders.controller.js"

const router = Router();

router.get("/orders", authenticateToken, getOrders);
router.get("/orders/:id", authenticateToken, getOrder);
router.post("/orders", authenticateToken, createOrder);
router.delete("/orders/:id", authenticateToken, deleteOrder);
router.put("/orders/:id", authenticateToken, updateOrder);

export default router;