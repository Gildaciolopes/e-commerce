const express = require("express");
const { createOrder, getMyOrders } = require("../controllers/orderController");
const { protect } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/", protect, createOrder);
router.get("/myorders", protect, getMyOrders);

module.exports = router;
