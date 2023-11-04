import React from "react";
import { Link } from "react-router-dom";
import productsData from "../data/ProductsData";

function ProductListingPage() {
  return (
    <div className="product-list">
      {productsData.map((product) => (
        <div className="product-card" key={product.id}>
          <img src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
          <p>Price: ${product.price}</p>
          <p>Discount: {product.discount}%</p>
          <Link to={`/product/${product.id}`}>Product Details</Link>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductListingPage;
