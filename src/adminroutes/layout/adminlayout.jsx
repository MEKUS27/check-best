import './layout.scss';

import { Outlet } from "react-router-dom";
import DashboardNavbar from "../../components/navbar/DashboardNavbar"
// import Footer from "../../components/footer/Footer";
import Menu from "../../components/menu/Menu";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const Layout = () => {
  return (
    <div className="main">
      <DashboardNavbar />
      <div className="con">
        <div className="menuContainer">
          <Menu />
        </div>
        <div className="contentContainer">
          <QueryClientProvider client={queryClient}>
            <Outlet />
          </QueryClientProvider>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
