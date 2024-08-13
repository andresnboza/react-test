import { Outlet } from "react-router-dom";
import "../../index.css";

const AuthenticationPage = () => {
  return <div className="fully-centered">
    <Outlet />
  </div>
};

export default AuthenticationPage;
