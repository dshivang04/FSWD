import React from "react";
import { useParams } from "react-router-dom";
import productsData from "../data/ProductsData";

function ProductDetailPage() {
  const { id } = useParams();
  const product = productsData.find((product) => product.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-detail">
      <img src={(product.image)} alt={product.name} />
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <p>Discount: {product.discount}%</p>
      <p>Description: {product.description}</p>
    </div>
  );
}

export default ProductDetailPage;