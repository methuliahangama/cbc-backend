import express from "express";
import { createProduct, getProducts } from "../controllers/productController.js";
import e from "express";

const productRouter = express.Router();

productRouter.post("/", createProduct);
productRouter.get("/", getProducts);

export default productRouter;