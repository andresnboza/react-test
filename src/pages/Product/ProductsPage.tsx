import { Outlet } from "react-router-dom";
import "../../index.css";

const tableTopSection: React.CSSProperties = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "20px",
  width: "100%",
};

const ProductsPage = () => {
  return (
    <div style={tableTopSection} className="full-page">
      <div style={{flexGrow: "1"}}>
        <Outlet />
      </div>
    </div>
  );
};

export default ProductsPage;
