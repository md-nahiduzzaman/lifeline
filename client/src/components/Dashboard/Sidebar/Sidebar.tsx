import { Link } from "react-router-dom";
import MenuItem from "./Menu/MenuItem";
import { FaUser } from "react-icons/fa6";
import PatientMenu from "./Menu/PatientMenu";
import DoctorMenu from "./Menu/DoctorMenu";
import AdminMenu from "./Menu/AdminMenu";

const Sidebar = () => {
  return (
    <div>
      {/* Sidebar */}
      <div
        className={`z-40 md:fixed flex flex-col justify-between overflow-x-hidden bg-[#F3F7FD] w-60 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform md:translate-x-0 transition duration-200 ease-in-out`}
      >
        <div>
          {/* logo */}
          <div className="w-full hidden md:flex px-4 justify-center items-center mx-auto">
            <Link to="/">
              <h1 className="text-4xl font-bold pb-3 text-[#041e49]">
                Life Line
              </h1>
            </Link>
          </div>
          <hr className="mt-0 mb-6" />
          {/* nav item */}
          <div className="flex flex-col justify-between flex-1 mt-6">
            <nav>
              <p className="text-xs text-[#041e49b3] pb-3.5 px-4 font-medium">
                Overview
              </p>
              <MenuItem label="Statistics" address="/dashboard" icon={FaUser} />
              <hr className="mt-6 mb-6" />
              <p className="text-xs text-[#041e49b3] pb-3.5 px-4 font-medium">
                Patient Panel
              </p>
              <PatientMenu />
              <hr className="mt-6 mb-6" />
              <p className="text-xs text-[#041e49b3] pb-3.5 px-4 font-medium">
                Doctor Panel
              </p>
              <DoctorMenu />
              <hr className="mt-6 mb-6" />
              <p className="text-xs text-[#041e49b3] pb-3.5 px-4 font-medium">
                Admin Panel
              </p>
              <AdminMenu />
            </nav>
          </div>
        </div>
        {/* <div>
          <hr />
          <p className="text-xs text-[#041e49b3] mt-6 pb-3.5 px-4 font-medium">
            User Panel
          </p>
          <MenuItem label="Profile" address="/profile" icon={FaUser} />
          <MenuItem label="Settings" address="/settings" icon={FaUser} />
          <MenuItem label="Logout" address="/settings" icon={FaUser} />
        </div> */}
      </div>
    </div>
  );
};

export default Sidebar;
