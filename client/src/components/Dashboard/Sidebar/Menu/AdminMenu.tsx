import { FaUser } from "react-icons/fa6";
import MenuItem from "./MenuItem";

const AdminMenu = () => {
  return (
    <>
      <MenuItem label="Dashboard" address="admin-dashboard" icon={FaUser} />
      <MenuItem label="Messages" address="admin-messages" icon={FaUser} />
      <MenuItem label="All Doctors" address="admin-doctors" icon={FaUser} />
    </>
  );
};

export default AdminMenu;
