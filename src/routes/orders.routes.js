import { Router } from "express";
import { authenticateToken } from "../middlewares/validateToken.js";
import {getOrders, getOrder, createOrder, updateOrder, deleteOrder} from "../controllers/orders.controller.js"
import { validateSchema } from "../middlewares/validateSchema.js";
import { createOrderSchema } from "../schemas/order.schema.js";

const router = Router();

router.get("/orders", authenticateToken, getOrders);
router.get("/orders/:id", authenticateToken, getOrder);
router.post("/orders", authenticateToken, validateSchema(createOrderSchema), createOrder);
router.delete("/orders/:id", authenticateToken, deleteOrder);
router.put("/orders/:id", authenticateToken, updateOrder);

export default router;