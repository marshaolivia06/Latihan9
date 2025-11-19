const express = require("express");
const router = express.Router();
const productController = require("../controllers/product.controller");

// Import middleware
const authBearer  = require("../middlewares/auth.middleware.js");

// PUBLIC
router.get("/", productController.getAllProducts);
router.get("/:id", productController.getProductById);

// PROTECTED
router.post("/", authBearer, productController.createProduct);
router.put("/:id", authBearer, productController.updateProduct);
router.delete("/:id", authBearer, productController.deleteProduct);

module.exports = router;
