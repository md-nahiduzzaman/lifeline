import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar";
import Footer from "../components/Shared/Footer/Footer";

const Main = () => {
  return (
    <div className="font-custom">
     <div className="h-16">
     <Navbar />
     </div>
      <div className="">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
