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
import ProductDetailsPage from "./pages/Product/ProductDetailsPage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";
import PrivateRoute from "./components/Routes/PrivateRoute";

function App() {
  return (
    <Router>
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
            <Route path=":id" element={<ProductDetailsPage />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
