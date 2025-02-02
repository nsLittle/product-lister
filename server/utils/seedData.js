const mongoose = require("mongoose");
const { faker } = require("@faker-js/faker");
const Product = require("../models/Product");
const Review = require("../models/Review");
require("dotenv").config();

console.log("🔍 MONGO_URI:", process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function seedDatabase() {
  try {
    console.log("Seeding database with fake products...");

    const products = [];
    for (let i = 0; i < 50; i++) {
      products.push(
        new Product({
          name: faker.commerce.productName(),
          category: faker.commerce.department(),
          price: parseFloat(faker.commerce.price()),
          description: faker.commerce.productDescription(),
          image: faker.image.urlPicsumPhotos({ category: "product" }),
        })
      );
    }

    const savedProducts = await Product.insertMany(products);
    console.log(`✅ Successfully added ${savedProducts.length} products.`);

    console.log("Seeding reviews for products...");
    const reviews = [];

    savedProducts.forEach((product) => {
      for (let i = 0; i < 3; i++) {
        reviews.push(
          new Review({
            reviewer: faker.person.fullName(),
            reviewText: faker.lorem.sentences(2),
            product: product._id,
          })
        );
      }
    });

    const savedReviews = await Review.insertMany(reviews);
    console.log(`✅ Successfully added ${savedReviews.length} reviews.`);

    console.log("Database seeding complete! 🚀");
    mongoose.connection.close();
  } catch (err) {
    console.error("Error seeding database:", err);
    mongoose.connection.close();
  }
}

seedDatabase();