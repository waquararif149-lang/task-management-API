import Product from "../models/product.model.js";

class ProductRepository {
    async createProduct(productData) {
        const product = await Product.create(productData);
        return product;
    }

    async getProducts(limit, cursor) {
        const query = {};

        if (cursor) {
            query._id = { $lt: cursor };
        }

        return await Product.find(query)
            .sort({ _id: -1 })
            .limit(limit);
    }
}

export default ProductRepository;