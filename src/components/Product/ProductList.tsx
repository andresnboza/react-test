import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IProduct } from "../../interfaces/product.interface";
import { AppDispatch, AppState } from "../../redux/store";
import Button from "../Inputs/Button";
import { setSplashScreen } from "../../redux/general/general.actions";
import {
  fetchProductsRequest,
  fetchProductsSuccess,
  fetchProductsFailure,
} from "../../redux/product/product.actions";
import { fetchProducts } from "../../utils/mockApi";
import { useState } from "react";
import Modal from "../Others/Modal";
import { useTheme } from "../../contexts/ThemeContext";
import "../../App.css";

const tableTopSection: React.CSSProperties = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "20px",
};

const btn_section: React.CSSProperties = {
  display: "flex",
  flexDirection: "row",
};

const ProductList = () => {

  const { theme } = useTheme();

  const dispatch = useDispatch<AppDispatch>();
  const { products } = useSelector((state: AppState) => state.products);
  const navigate = useNavigate();

  // State for modal
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null);

  const redirectToProductDetails = (id: string) => {
    navigate(`/home/products/${id}`);
  };

  const fetchSomeProducts = async () => {
    dispatch(fetchProductsRequest());
    try {
      // Replace with your API call
      const response = await fetchProducts(products.length + 5);
      dispatch(fetchProductsSuccess(response));
      dispatch(setSplashScreen(false));
    } catch (error) {
      dispatch(fetchProductsFailure("Failed to fetch products"));
    }
  };

  const update = (product: IProduct) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProduct(null);
  };

  const allProducts = products.map((product: IProduct) => (
    <tr key={product.id} >
      <th scope="row" className={`table-row ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>{product.id}</th>
      <td className={`table-row ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>{product.name}</td>
      <td className={`table-row ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>{product.sku}</td>
      <td className={`table-row ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>{product.ean}</td>
      <td className={`table-row ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
        <div style={btn_section}>
          <Button
            label="See Product Details"
            onClick={() => redirectToProductDetails(product.id)}
            type={""}
            loadingState={false}
          />
          <div style={{ width: "10px" }}></div>
          <Button
            label="Update"
            onClick={() => update(product)}
            type={"info"}
            loadingState={false}
          />
        </div>
      </td>
    </tr>
  ));

  return (
    <div className="products-page">
      <div style={tableTopSection}>
        <h1>Products</h1>
        <Button
          onClick={() => fetchSomeProducts()}
          label="Show More"
          type="" // Ensure this is correct or remove if not needed
          loadingState={false}
        />
      </div>
      <table className={`table ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
        <thead>
          <tr>
            <th scope="col" className={`table-row ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>#</th>
            <th scope="col" className={`table-row ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>Name</th>
            <th scope="col" className={`table-row ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>SKU</th>
            <th scope="col" className={`table-row ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>EAN</th>
            <th scope="col" className={`table-row ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>Actions</th>
          </tr>
        </thead>
        <tbody>{allProducts}</tbody>
      </table>
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          product={selectedProduct}
        />
      )}
    </div>
  );
};

export default ProductList;
