require("dotenv").config({ path: __dirname + "/.env" }); // Ensures it loads from the correct directory
console.log("🔍 MONGO_URI in server.js:", process.env.MONGO_URI);

const path = require("path"); 
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const fs = require("fs");

const app = express();

const yaml = require("js-yaml");
const swaggerDocument = yaml.load(fs.readFileSync(path.join(__dirname, "docs/swagger.yaml"), "utf8"));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

app.get("/", (req, res) => {
  res.send("API is running...");
});

const productRoutes = require("./routes/productRoutes");
app.use("/products", productRoutes);

const reviewRoutes = require("./routes/reviewRoutes");
app.use("/reviews", reviewRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));