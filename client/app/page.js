async function getProducts() {
  const res = await fetch("http://localhost:8000/api/products", { cache: "no-store" });
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();
}

export default async function Home() {
  const products = await getProducts();

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            <a href={`/product/${product._id}`}>
              <h3>{product.name}</h3>
              <p>Price: ${product.price}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}