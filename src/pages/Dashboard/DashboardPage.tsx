import { Outlet } from "react-router-dom";
import TopMenu from "../../components/Dashboard/TopMenu";

const DashboardStyles = {
  padding: "20px",
}

const DashboardPage = () => {
  return (
    <div className="full-page">
      <TopMenu />
      <div style={DashboardStyles}>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardPage;
