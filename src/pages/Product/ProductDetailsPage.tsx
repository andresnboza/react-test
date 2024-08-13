import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/store";

const ProductDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const products = useSelector((state: AppState) => state.products.products);
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-details">
      <h1>Product Details</h1>
      <p>
        <strong>ID:</strong> {product.id}
      </p>
      <p>
        <strong>Name:</strong> {product.name}
      </p>
      <p>
        <strong>SKU:</strong> {product.sku}
      </p>
      <p>
        <strong>EAN:</strong> {product.ean}
      </p>
    </div>
  );
};

export default ProductDetailsPage;
