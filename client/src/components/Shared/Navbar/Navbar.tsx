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
      <li>
        <NavLink to={'/solutions'}>Solutions</NavLink>
      </li>
      {/* <li className="">
        <details className="">
          <summary>Solution</summary>
          <ul className="p-2 ">
            <li>Hospital Administration</li>
            <li className="my-3">Patient Management</li>
            <li>Doctor and Staff Portal</li>
            <li className="my-3">Pharmacy and Lab Integration</li>
            <li>Patient Self-Service Portal</li>
            <li className="my-3">Telemedicine Integration</li>
            <li>Billing and Insurance Management</li>
            <li className="mt-3">Analytics and Reporting</li>
          </ul>
        </details>
      </li> */}
      <li><NavLink to={'/package'}>Ours Package</NavLink> </li>
      <li><NavLink to={'/about'}>About</NavLink></li>
    </>
  );
  return (
    <div className="bg-[#ECFEFF] shadow-lg z-10 fixed mx-auto w-full  h-16">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 min-w-56  p-2 shadow"
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
          <a href="/drCart" className="btn bg-[#06B6D4] text-white">Appointment</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
