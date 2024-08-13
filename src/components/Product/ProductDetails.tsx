import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/store";
import Button from "../Inputs/Button";

const topNavigation: React.CSSProperties = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  width: "100%",
};

const ProductDetails = () => {
  const navigate = useNavigate();

  const backToProductList = () => {
    navigate(`/home/products/`);
  };

  // Extract product ID from URL
  const { id } = useParams<{ id: string }>();

  // Access the products from the Redux store
  const products = useSelector((state: AppState) => state.products.products);

  // Find the product with the matching ID
  const product = products.find((p) => p.id == id);

  if (!product) {
    return (
      <div style={topNavigation}>
        <div>Product not found</div>
        <Button
          label="Back to Products"
          onClick={backToProductList}
          type={""}
          loadingState={false}
        />
      </div>
    );
  }

  return (
    <div className="product-details">
      <div style={topNavigation}>
        <h1>Product Details</h1>
        <Button
          label="Back to Products"
          onClick={backToProductList}
          type={""}
          loadingState={false}
        />
      </div>
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
      {/* Add more details or actions as needed */}
    </div>
  );
};

export default ProductDetails;
