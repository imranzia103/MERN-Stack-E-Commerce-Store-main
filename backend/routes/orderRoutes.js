import express from "express";
import {
  createOrder,
  getAllOrders,
  getUserOrders,
} from "../controller/orderController.js";
import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware.js";

const router = express.Router();

router
  .route("/")
  .post(authenticate, createOrder)
  .get(authenticate, authorizeAdmin, getAllOrders);

router.route("/mine").get(authenticate, createOrder, getUserOrders);

export default router;
