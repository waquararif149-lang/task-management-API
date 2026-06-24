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

        if (cursor?.created_at && cursor?._id) {
            query.$or = [
                {
                    created_at: {
                        $lt: new Date(cursor.created_at)
                    }
                },
                {
                    created_at: new Date(cursor.created_at),
                    _id: {
                        $lt: cursor._id
                    }
                }
            ];
        }

        return await Product.find(query)
            .sort({ created_at: -1, _id: -1 })
            .limit(limit);
    }
}

export default ProductRepository;