import { Outlet } from "react-router-dom";
import TopMenu from "../../components/Dashboard/TopMenu";

const DashboardStyles = {
  padding: "20px",
}

type Props = {};

const DashboardPage = (props: Props) => {
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
