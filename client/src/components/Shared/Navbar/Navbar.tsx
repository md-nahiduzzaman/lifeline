import { Link, NavLink, useNavigate } from "react-router-dom";
import userRole from "../../../hooks/useRole";
import { AuthContext } from "../../../providers/AuthProvider";
import { useContext } from "react";

const Navbar = () => {
  const {user,logOut}=useContext(AuthContext)as any
  const navigate=useNavigate()
  const {data}=userRole()as any
  const navelink = (
    <>
      <li>
        <NavLink className={({isActive})=>isActive?'text-[#5dEB4B] hover:text-[#5dEB4B] ':'text-white hover:text-[#5dEB4B]'} to={"/"}>Home</NavLink>
      </li>
     {
      !user&& <li>
      { <NavLink className={({isActive})=>isActive?'text-[#5dEB4B] hover:text-[#5dEB4B] ':'text-white hover:text-[#5dEB4B]'} to={"/signup"}>Sign Up</NavLink>}
     </li>
     }
     {
      !user&& <li>
      <NavLink className={({isActive})=>isActive?'text-[#5dEB4B] hover:text-[#5dEB4B] ':'text-white hover:text-[#5dEB4B]'} to={"/login"}>Login</NavLink>
    </li>
     }
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

  const handileClickLogout=()=>{
logOut()
if(user){
  navigate('/login')
}
  }
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
          <Link to={'/drCart'}> <button  className="btn border-none bg-[#23085A] text-white">Appointment </button> </Link>
        
        </div>
        {user&& <div className="dropdown dropdown-end text-neutral">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
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
            <li onClick={handileClickLogout}>
              <a>Logout</a>
            </li>
          </ul>
        </div>

        }
      </div>
    </div>
  );
};

export default Navbar;
