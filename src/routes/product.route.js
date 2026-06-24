import express from "express";
// import ProductController from "../controllers/product.controler.js";
import ProductController from "../controler/product.controler.js";

const ProductRouter = express.Router();

const productController = new ProductController();

ProductRouter.post(
  "/",
  productController.createProduct.bind(productController)
);
ProductRouter.get(
  "/",
  productController.getProducts.bind(productController)
);

export default ProductRouter;