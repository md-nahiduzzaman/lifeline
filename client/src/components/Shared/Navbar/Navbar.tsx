import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navelink = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/signup"}>Sign Up</NavLink>
      </li>
      <li>
        <NavLink to={"/login"}>Login</NavLink>
      </li>
      <li>Pharmacy</li>
      <li>About</li>
    </>
  );
  return (
    <div className="bg-[#ECFEFF]  shadow-lg z-10 fixed w-full h-16">
      <div className="navbar max-w-screen-xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navelink}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl font-bold ">Lifeline</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-8 font-semibold items-center">
            {navelink}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-[#06B6D4] text-white">Appointment</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
