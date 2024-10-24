import { NavLink } from "react-router-dom";
import userRole from "../../../hooks/useRole";
import { AuthContext } from "../../../providers/AuthProvider";
import { useContext } from "react";

const Navbar = () => {
  const {user}=useContext(AuthContext)as any
  const {data,refetch}=userRole()as any
  const navelink = (
    <>
      <li>
        <NavLink className={({isActive})=>isActive?'text-[#5dEB4B] hover:text-[#5dEB4B] ':'text-white hover:text-[#5dEB4B]'} to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink className={({isActive})=>isActive?'text-[#5dEB4B] hover:text-[#5dEB4B] ':'text-white hover:text-[#5dEB4B]'} to={"/signup"}>Sign Up</NavLink>
      </li>
      <li>
        <NavLink className={({isActive})=>isActive?'text-[#5dEB4B] hover:text-[#5dEB4B] ':'text-white hover:text-[#5dEB4B]'} to={"/login"}>Login</NavLink>
      </li>
      <li>
        <NavLink className={({isActive})=>isActive?'text-[#5dEB4B] hover:text-[#5dEB4B] ':'text-white hover:text-[#5dEB4B]'} to={'/solutions'}>Solutions</NavLink>
      </li>
      <li>
        <NavLink className={({isActive})=>isActive?'text-[#5dEB4B] hover:text-[#5dEB4B] ':'text-white hover:text-[#5dEB4B]'} to={"/home-service"}>Home Service</NavLink>
      </li>
      <li>
        <NavLink className={({isActive})=>isActive?'text-[#5dEB4B] hover:text-[#5dEB4B] ':'text-white hover:text-[#5dEB4B]'} to={"/package"}>Ours Package</NavLink>{" "}
      </li>
      <li>
        <NavLink className={({isActive})=>isActive?'text-[#5dEB4B] hover:text-[#5dEB4B] ':'text-white hover:text-[#5dEB4B]'} to={"/about"}>About</NavLink>
      </li>
      <li>
       {user&&(
<NavLink className={({isActive})=>isActive?'text-[#5dEB4B] hover:text-[#5dEB4B] ':'text-white hover:text-[#5dEB4B]'} to={data?.role === 'admin' ? '/dashboard/admin-dashboard' :
    data?.role === 'doctor' ? '/dashboard/doctorHome' :
    '/dashboard/patient-appointment'}>Dashboard</NavLink>
       )

       }
      </li>
    </>
  );
  return (
    <div className="bg-[#00953B] font-custom shadow-lg z-10 fixed mx-auto w-full text-white h-16">
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
          <ul className="menu-horizontal px-1 gap-12 font-semibold items-center">
            {navelink}
          </ul>
        </div>
        <div className="navbar-end">
          <a href="/drCart" className="btn border-none bg-[#23085A] text-white">Appointment</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
