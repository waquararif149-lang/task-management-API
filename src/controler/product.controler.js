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
}