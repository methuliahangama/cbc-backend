import Product from "../models/product.js";
import { isAdmin } from "./userController.js";

export function createProduct(req, res) {

    if(!isAdmin(req)) {
        res.json({
            message: "Only admins can add products"
        })
        return;
    }

    const newProductData = req.body;
    const product = new Product(newProductData);

    product.save().then(() => {
        res.json({
            message: "Product created successfully"
        })
    })
        .catch((error) => {
            res.json({
                message: error
            })
        })
}

export function getProducts(req, res) {
    Product.find().then((products) => {
        res.json(products);
    })
}

