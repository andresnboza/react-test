import { Outlet } from "react-router-dom";
import TopMenu from "../../components/Dashboard/TopMenu";

const DashboardStyles = {
  padding: "20px",
}

const DashboardPage = () => {
  return (
    <>
      <TopMenu />
      <div style={DashboardStyles}>
        <Outlet />
      </div>
    </>
  );
};

export default DashboardPage;
