import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar";
import Footer from "../components/Shared/Footer/Footer";
import { FaRegMessage } from "react-icons/fa6";

const Main = () => {
  return (
    <div className="font-custom">
     <div className="h-16">
     <Navbar />
     </div>
     <FaRegMessage className="text-5xl rounded-lg animate-bounce bg-green-400 fixed z-20 text-white p-2 mt-[350px] lg:mt-[510px] ml-10" />
      <div className="">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
