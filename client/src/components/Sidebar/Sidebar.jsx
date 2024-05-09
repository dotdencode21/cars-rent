import { sidebarLinks } from "@/mock/links";
import styles from "./sidebar.module.css";
import { NavLink } from "react-router-dom";
import cn from "classnames";

import { FaUser } from "react-icons/fa";
import { FaCar } from "react-icons/fa6";
import { MdLocalOffer } from "react-icons/md";
import { RiToolsFill } from "react-icons/ri";
import { useUserStore } from "@/store/user.store";

const Sidebar = () => {
  const { isAdmin } = useUserStore();

  const icon = {
    userDetails: <FaUser />,
    bookedCars: <FaCar />,
    recommendations: <MdLocalOffer />,
    actions: <RiToolsFill size="1.5rem" />,
  };

  const filteredLinks = isAdmin ? sidebarLinks : sidebarLinks.slice(0, -1);

  return (
    <div className={styles["sidebar"]}>
      {filteredLinks.map((link) => {
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
