import { Link, useNavigate } from "react-router-dom";
import "react-loading-skeleton/dist/skeleton.css";
import "../../index.css";
import RegisterForm from "../../components/Authentication/RegisterForm";

const RegistrationPage = () => {
  const navigate = useNavigate();

  const redirectToLogin = () => {
    navigate("/auth/login");
  };

  return (
    <>
      <h2 className="centered-text">Registration</h2>
      <RegisterForm onSubmit={redirectToLogin} />
      <p>
        Already have an account? <Link to="/auth/login">Login here</Link>.
      </p>
    </>
  );
};

export default RegistrationPage;
