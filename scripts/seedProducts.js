import mongoose from "mongoose";
import dotenv from "dotenv";
import { faker } from "@faker-js/faker";

import Product from "../src/models/product.model.js";

dotenv.config();

const categories = [
  "Electronics",
  "Books",
  "Sports",
  "Fashion",
  "Home",
  "Toys",
];

async function seedProducts() {
  try {
    await mongoose.connect(process.env.MONGO_URL);

    console.log("MongoDB Connected");

    const TOTAL_PRODUCTS = 200000;
    const BATCH_SIZE = 10000;

    for (let i = 0; i < TOTAL_PRODUCTS; i += BATCH_SIZE) {
      const products = [];

      for (let j = 0; j < BATCH_SIZE; j++) {
        const createdDate = faker.date.past({ years: 3 });

        products.push({
          name: faker.commerce.productName(),

          category:
            categories[
              Math.floor(Math.random() * categories.length)
            ],

          price: Number(
            faker.commerce.price({
              min: 100,
              max: 100000,
            })
          ),

          created_at: createdDate,

          updated_at: faker.date.between({
            from: createdDate,
            to: new Date(),
          }),
        });
      }

      await Product.insertMany(products);

      console.log(
        `Inserted ${Math.min(
          i + BATCH_SIZE,
          TOTAL_PRODUCTS
        )} products`
      );
    }

    console.log("Seeding completed successfully");

    process.exit(0);
  } catch (error) {
    console.error("Seeding Error:", error);
    process.exit(1);
  }
}

seedProducts();