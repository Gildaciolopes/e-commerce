const express = require("express");
const { createPixPayment } = require("../controllers/paymentController");
const { protect } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/pix", protect, createPixPayment);

module.exports = router;
