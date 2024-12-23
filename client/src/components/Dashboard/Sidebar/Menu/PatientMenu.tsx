import { FaUser } from "react-icons/fa6";
import MenuItem from "./MenuItem";

const PatientMenu = () => {
  return (
    <>
      <MenuItem
        label="Appointment"
        address="patient-appointment"
        icon={FaUser}
      />
      <MenuItem
        label="Online Prescription"
        address="patient-prescription"
        icon={FaUser}
      />
      <MenuItem label="Health Records" address="patient-record" icon={FaUser} />
      <MenuItem label="Payment History" address="user-payment-history" icon={FaUser} />
      <MenuItem label="My Appointments" address="my-appointment" icon={FaUser} />
    </>
  );
};

export default PatientMenu;
