const productModel = require("../models/products.model");

// product Create
async function createProduct(req, res, next) {
    try {
        const createProduct = await productModel.create(req.body);
        res.status(201).json(createProduct);
    } catch (error) {
        next(error); // next를 쓴 이유는 비동기(async) 요청은 에러 발생시 에러처리기로 바로 가질못함.
        // 그래서 next를 써서 에러처리기로 보내줘야됨.
    }
}

// product Read
async function getProducts(req, res, next) {
    try {
        const allProducts = await productModel.find({});
        res.status(200).json(allProducts);
    } catch (errer) {
        next(error);
    }
}

async function getProductById(req, res, next) {
    try {
        const product = await productModel.findById(req.params.productId);
        if (product) {
            res.status(200).json(product);
        } else {
            res.status(404).send();
        }
    } catch (error) {
        next(error);
    }
}

// product Update
async function updateProduct(req, res, next) {
    try {
        let updatedProduct = await productModel.findByIdAndUpdate(
            req.params.productId,
            req.body,
            { new: true }
        )
        if (updatedProduct) {
            res.status(200).json(updatedProduct);
        } else {
            res.status(404).send();
        }
    } catch (error) {
        next(error);
    }
}

// product Delete
async function deleteProduct(req, res, next) {
    try {
        let deletedProduct = await productModel.findByIdAndDelete(req.params.productId);
        if (deletedProduct) {
            res.status(200).json(deletedProduct);
        } else {
            res.status(404).send();
        }
    } catch (error) {
        next(error);
    }
}

module.exports = {
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct
}