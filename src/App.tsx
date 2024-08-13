import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import "./App.css";
import AuthenticationPage from "./pages/Authentication/AuthenticationPage";
import LoginPage from "./pages/Authentication/LoginPage";
import RegistrationPage from "./pages/Authentication/RegistrationPage";
import DashboardPage from "./pages/Dashboard/DashboardPage";
import ProductsPage from "./pages/Product/ProductsPage";
import ProductDetailsPage from "./components/Product/ProductDetails";
import NotFoundPage from "./pages/NotFound/NotFoundPage";
import PrivateRoute from "./components/Routes/PrivateRoute";
import ProductList from "./components/Product/ProductList";
import SplashScreenPage from "./pages/Splash/SplashScreenPage";
import { useSelector } from "react-redux";
import { AppState } from "./redux/store";
import { useTheme } from "./contexts/ThemeContext";

import "./App.css";

function App() {
  const { theme } = useTheme();

  const splashScreenStatus = useSelector(
    (state: AppState) => state.general.splashScreenStatus
  );

  if (splashScreenStatus) {
    return <SplashScreenPage />;
  }

  return (
    <Router>
      {splashScreenStatus ? (
        <SplashScreenPage />
      ) : (
        <div className={`app ${theme === 'dark' ? 'dark-theme' : ''}`}>
          <Routes>
            <Route path="/" element={<Navigate to="/auth" replace />} />
            <Route path="/auth" element={<AuthenticationPage />}>
              <Route index element={<Navigate to="login" />} />
              <Route path="login" element={<LoginPage />} />
              <Route path="register" element={<RegistrationPage />} />
            </Route>
            <Route
              path="/home"
              element={
                <PrivateRoute>
                  <DashboardPage />
                </PrivateRoute>
              }
            >
              <Route index element={<Navigate to="products" />} />
              <Route path="products" element={<ProductsPage />}>
                <Route index element={<Navigate to="list" />} />
                <Route path="list" element={<ProductList />} />
                <Route path=":id" element={<ProductDetailsPage />} />
              </Route>
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      )}
    </Router>
  );
}

export default App;
