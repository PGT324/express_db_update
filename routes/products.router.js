const express = require("express");

//router
const productsRouter = express.Router();

//productsController
const productsController = require("../controllers/products.controller")

productsRouter.post("/", productsController.createProduct);
productsRouter.get("/", productsController.getProducts);
productsRouter.get("/:productId", productsController.getProductById);
productsRouter.put("/:productId", productsController.updateProduct);
productsRouter.delete("/:productId", productsController.deleteProduct);

module.exports = {
    productsRouter
}