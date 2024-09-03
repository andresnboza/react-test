const topDashboardMenu = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 20px",
  height: "60px",
  borderBottom: "1px solid #e0e0e0",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  backgroundColor: "trasparent",
};

import { useNavigate } from "react-router-dom";
import { logout } from "../../utils/auth";
import ThemeToggle from "../Others/ThemeToggle";

const TopMenu = () => {
  
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/auth"); // Redirect to the dashboard
  };

  return (
    <div style={topDashboardMenu}>
      <h3>React Test</h3>
      <div>
        <ThemeToggle />
        <button onClick={handleLogout} className="btn btn-danger">
          Logout
        </button>
      </div>
    </div>
  );
};

export default TopMenu;
