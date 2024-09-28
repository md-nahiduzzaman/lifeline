import { Outlet } from "react-router-dom";
import Sidebar from "../components/Dashboard/Sidebar/Sidebar";

const DashboardLayout = () => {
  return (
    <>
      <div>
        {/* sidebar */}
        <Sidebar />
        {/* dynamic content */}
        <div className="flex-1 md:ml-64">
          <div className="p-5">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
