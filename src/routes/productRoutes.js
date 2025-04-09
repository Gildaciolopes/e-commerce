const express = require("express");
const {
  getAll,
  getById,
  create,
  update,
  remove,
} = require("../controllers/productController");
const { protect } = require("../middlewares/authMiddleware");
const router = express.Router();

router.get("/", getAll);
router.get("/:id", getById);
router.post("/", protect, create);
router.put("/:id", protect, update);
router.delete("/:id", protect, remove);

module.exports = router;
