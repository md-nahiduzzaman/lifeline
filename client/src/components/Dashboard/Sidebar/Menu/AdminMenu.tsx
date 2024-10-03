import { FaBed, FaUser } from "react-icons/fa6";
import MenuItem from "./MenuItem";
import { FaUserMd } from "react-icons/fa";

const AdminMenu = () => {
  return (
    <>
      <MenuItem label="Dashboard" address="admin-dashboard" icon={FaUser} />
      <MenuItem label="Messages" address="admin-messages" icon={FaUser} />
      <MenuItem label="All Doctors" address="admin-doctors" icon={FaUserMd} />
      <MenuItem label="Total Bed" address="total-bed" icon={FaBed} />
      
      
    </>
  );
};

export default AdminMenu;
