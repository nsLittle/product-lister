async function getProduct(id) {
    const res = await fetch(`http://localhost:8000/api/products/${id}`, { cache: "no-store" });
    if (!res.ok) {
      throw new Error("Failed to fetch product");
    }
    return res.json();
  }
  
  export default async function ProductPage({ params }) {
    const product = await getProduct(params.id);
  
    return (
      <div>
        <h2>{product.name}</h2>
        <p>Category: {product.category}</p>
        <p>Price: ${product.price}</p>
        <img src={product.image} alt={product.name} width="200" />
        <a href="/">Back to Products</a>
      </div>
    );
  }  