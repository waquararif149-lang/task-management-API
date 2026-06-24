import Product from "../models/product.model.js";

class ProductRepository {
    async createProduct(productData) {
        const product = await Product.create(productData);
        return product;
    }

    async getProducts(limit, cursor, category) {
        const query = {};

        if (category) {
            query.category = category;
        }

        if (cursor) {
            query._id = { $lt: cursor };
        }

        return await Product.find(query)
            .sort({ created_at: -1, _id: -1 })
            .limit(limit);
    }

    async deleteMany(){
        return await Product.deleteMany({});
    }
}

export default ProductRepository;