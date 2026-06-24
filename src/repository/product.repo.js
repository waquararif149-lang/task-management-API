import Product from "../models/product.model.js";

class ProductRepository {
    async createProduct(productData) {
        const product = await Product.create(productData);
        return product;
    }

    async getProducts(limit = 20) {
        return await Product.find()
            .sort({ created_at: -1, _id: -1 })
            .limit(limit);
    }
}

export default ProductRepository;