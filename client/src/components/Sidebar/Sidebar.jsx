import { sidebarLinks } from "@/mock/links";
import styles from "./sidebar.module.css";
import { NavLink } from "react-router-dom";
import cn from "classnames";

import { FaUser } from "react-icons/fa";
import { FaCar } from "react-icons/fa6";
import { MdLocalOffer } from "react-icons/md";

const Sidebar = () => {
  const icon = {
    userDetails: <FaUser />,
    bookedCars: <FaCar />,
    recommendations: <MdLocalOffer />,
  };

  return (
    <div className={styles["sidebar"]}>
      {sidebarLinks.map((link) => {
        return (
          <NavLink
            key={link.id}
            to={link.to}
            className={({ isActive }) =>
              cn({
                [styles["sidebar-link"]]: true,
                [styles["sidebar-link_active"]]: isActive,
              })
            }
          >
            {icon[link.name]}
            {link.title}
          </NavLink>
        );
      })}
    </div>
  );
};

export default Sidebar;
