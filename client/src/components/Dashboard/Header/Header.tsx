import { IoMdCart, IoMdNotifications } from "react-icons/io";
import useAuth from "../../../hooks/useAuth";

const Header = () => {
  const { user } = useAuth();
  console.log(user);

  return (
    <div className="sticky top-0 z-30 p-4 py-2 bg-white border-b">
      <div className="flex items-center justify-end gap-2 pr-6 space-x-6">
        {/* Cart Icon */}
        <button className="btn">
          <IoMdCart className="text-2xl" />
          <div className="badge badge-secondary">+99</div>
        </button>

        {/* Notification Icon */}
        <div className="text-2xl">
          <IoMdNotifications />
        </div>

        {/* User Avatar */}
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="User Avatar"
                src={
                  user?.photoURL ||
                  "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                }
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
