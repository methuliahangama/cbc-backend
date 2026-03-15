import e from "express";
import Product from "../models/product.js";

export function getProduct(req, res) {
    Product.find().then(
        (productList) => {
            res.json({
                list: productList
            })
        }
    ).catch(
        (err) => {
            res.json({
                message: "Error fetching products"
            })
        }
    )

}

export function createProduct(req, res) {

    console.log(req.user);

    if (req.user == null) {
        res.json({
            message: "Unauthorized"
        })
        return;
    }

    if (req.user.type != "admin") {
        res.json({
            message: "You are not an admin"
        })
        return;
    }

    const product = new Product(req.body);
    product.save().then(() => {
        res.json({
            message: "Product created successfully"
        })
    }
    ).catch(() => {
        res.json({
            message: "Error creating product"
        })
    }
    )
}

export function deleteProduct(req, res) {
    Product.deleteOne({ name: req.params.name }).then(
        () => {
            res.json(
                {
                    message: "Product deleted successfully"
                }
            )
        }
    ).catch(() => {
        res.json({
            message: "Error deleting product"
        })
    }
    )
}

export function getProductByName(req, res) {
    const name = req.params.name;
    Product.find({ name: name }).then(
        (productList) => {

            if (productList.length == 0) {
                res.json({
                    message: "No product found with the given name"
                })
            } else {
                res.json({
                    list: productList
                })
            }
        }
    ).catch(() => {
        res.json({
            message: "Error fetching product"
        })
    })
}