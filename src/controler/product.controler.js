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
            const cursor = {
                _id: req.query.cursorId,
                created_at: req.query.cursorDate
            };
            const category = req.query.category;

            const products =
                await this.productRepository.getProducts(
                    limit,
                    cursor,
                    category
                );

            const lastproduct=products[products.length - 1];

            const nextCursor ={
                _id:lastproduct._id,
                created_at:lastproduct.created_at
            }

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

    async deleteMany(req, res) {
        try {
            await this.productRepository.deleteMany();
            res.status(200).json({
                success: true,
                message: "prod deleted successfully"
            })
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }
}