// import ProductRepository from "../repositories/product.repository.js";
import ProductRepository from "../repository/product.repo.js";

export default class ProductController {
    constructor() {
        this.productRepository = new ProductRepository();
    }

    async createProduct(req, res) {
        try {
            const product = await this.productRepository.createProduct(
                req.body
            );

            return res.status(201).json({
                success: true,
                data: product,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }

    async getProducts(req, res) {
        try {
            const limit = Number(req.query.limit) || 20;
            const cursor = req.query.cursor;

            const products =
                await this.productRepository.getProducts(
                    limit,
                    cursor
                );

            const nextCursor =
                products.length > 0
                    ? products[products.length - 1]._id
                    : null;

            return res.status(200).json({
                success: true,
                count: products.length,
                nextCursor,
                data: products,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }
}