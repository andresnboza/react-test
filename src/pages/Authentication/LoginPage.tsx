import { Link, useNavigate } from "react-router-dom";
import "react-loading-skeleton/dist/skeleton.css";
import "../../index.css";
import LoginForm from "../../components/Authentication/LoginForm";

const LoginPage = () => {
  const navigate = useNavigate();

  const redirectToHome = () => {
    navigate("/home"); // Redirect to the dashboard
  };

  return (
    <>
      <h2 className="centered-text">Login</h2>
      <LoginForm onSubmit={redirectToHome} />
      <p>
        Don't have an account? <Link to="/auth/register">Register here</Link>.
      </p>
    </>
  );
};

export default LoginPage;
