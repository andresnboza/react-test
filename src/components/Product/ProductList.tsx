import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IProduct } from "../../interfaces/product.interface";
import { AppState } from "../../redux/store";
import Button from "../Inputs/Button";

const tableTopSection: React.CSSProperties = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "20px",
};

const ProductList = () => {
  const { products } = useSelector((state: AppState) => state.products);
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("Show more products");
  };

  const redirectToProductDetails = (id: string) => {
    navigate(`/home/products/${id}`);
  };

  const allProducts = products.map((product: IProduct) => (
    <tr key={product.id}>
      <th scope="row">{product.id}</th>
      <td>{product.name}</td>
      <td>{product.sku}</td>
      <td>{product.ean}</td>
      <td>
        <Button
          label="See Product Details"
          onClick={() => redirectToProductDetails(product.id)}
          type={""}
          loadingState={false}
        />
      </td>
    </tr>
  ));

  return (
    <div className="products-page">
      <div style={tableTopSection}>
        <h1>Products</h1>
        <Button
          onClick={handleClick}
          label="Show More"
          type="" // Ensure this is correct or remove if not needed
          loadingState={false}
        />
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">SKU</th>
            <th scope="col">EAN</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>{allProducts}</tbody>
      </table>
    </div>
  );
};

export default ProductList;
