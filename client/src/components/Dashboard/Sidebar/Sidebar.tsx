import { Link } from "react-router-dom";
import MenuItem from "./Menu/MenuItem";
import { FaUser } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <div>
      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform md:translate-x-0 transition duration-200 ease-in-out`}
      >
        <div>
          {/* logo */}
          <div className="w-full hidden md:flex px-4 py-2 justify-center items-center mx-auto">
            <Link to="/">
              <h1 className="text-4xl font-semibold">Lifeline</h1>
            </Link>
          </div>
          <hr />
          {/* nav item */}
          <div className="flex flex-col justify-between flex-1 mt-6">
            <nav>
              <MenuItem label="Profile" address="/dashboard" icon={FaUser} />
            </nav>
          </div>
        </div>
        <div>
          <hr />

          <MenuItem label="Profile" address="/dashboard" icon={FaUser} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
