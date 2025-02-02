"use client";

import React, { useContext } from "react";
import Image from "next/image";
import { ProductContext } from "@/context/ProductContext";

export default function ProductsList() {
  const { products } = useContext(ProductContext);

  console.log("Products received in ProductsList:", products);

  if (!Array.isArray(products) || products.length === 0) {
    return <p>No products found</p>;
  }

  return (
    <main>
      <div className="product-list">
        {products.map((item) => {
          // ✅ Fix: Move console.log() outside JSX
          console.log("🔍 Product image URL:", item.image);

          return (
            <div key={item._id} className="product-card">
              <div className="product-details">
                <p className="product-category">Category: {item.category}</p>
                <p className="product-price">${item.price}</p>
              </div>
              <Image
                className="image-card"
                src={item.image}
                alt={item.name}
                width={245}
                height={245}
                unoptimized
                onError={(e) => console.error("🚨 Image failed to load:", e)}
              />
              <h2 className="product-name">{item.name}</h2>
            </div>
          );
        })}
      </div>
    </main>
  );
}