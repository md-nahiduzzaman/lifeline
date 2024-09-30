import { NavLink } from "react-router-dom";

interface MenuItemProps {
  label: string;
  address: string;
  icon: React.ComponentType;
}

const MenuItem = ({ label, address, icon: Icon }: MenuItemProps) => {
  return (
    <>
      <NavLink
        to={address}
        end
        className={({ isActive }) =>
          `flex items-center px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300 transform  hover:bg-[#E3ECFA] ${
            isActive ? "bg-[#A8C7FA]  text-[#041e49]" : "text-[#041e49b3]"
          }`
        }
      >
        <Icon />

        <span className="mx-4 font-medium">{label}</span>
      </NavLink>
    </>
  );
};

export default MenuItem;
