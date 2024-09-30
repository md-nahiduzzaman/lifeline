import { FaUser } from "react-icons/fa6";
import MenuItem from "./MenuItem";

const DoctorMenu = () => {
  return (
    <>
      <MenuItem
        label="Appointment"
        address="doctor-appointment"
        icon={FaUser}
      />
    </>
  );
};

export default DoctorMenu;
