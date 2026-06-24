import Product from "../models/product.model.js";

class ProductRepository {
  async createProduct(productData) {
    const product = await Product.create(productData);
    return product;
  }
}

export default ProductRepository;