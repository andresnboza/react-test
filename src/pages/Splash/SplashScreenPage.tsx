import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppState } from "../../redux/store";
import {
  fetchProductsRequest,
  fetchProductsSuccess,
  fetchProductsFailure,
} from "../../redux/product/product.actions";
import { fetchProducts } from "../../utils/mockApi";
import { setSplashScreen } from "../../redux/general/general.actions";
import "../../index.css";

const SplashScreenPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, products, error } = useSelector(
    (state: AppState) => state.products
  );

  useEffect(() => {
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

    fetchSomeProducts();
  }, [dispatch]);

  if (loading) {
    return <div className="full-centered">Loading...</div>;
  }

  if (error) {
    return <div className="full-centered">Error: {error}</div>;
  }

  return <div className="full-centered">SplashScreenPage</div>;
};

export default SplashScreenPage;
