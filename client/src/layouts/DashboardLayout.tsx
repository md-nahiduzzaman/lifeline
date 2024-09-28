import { Outlet } from "react-router-dom";
import Sidebar from "../components/Dashboard/Sidebar/Sidebar";
import Header from "../components/Dashboard/Header/Header";

const DashboardLayout = () => {
  return (
    <>
      <div>
        {/* sidebar */}
        <Sidebar />
        {/* main content */}
        <div>
          {/* sticky header */}
          <Header />
          {/* dynamic content */}
          <div className="flex-1 md:ml-64">
            <div className="p-5">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
