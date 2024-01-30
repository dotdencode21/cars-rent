import { NavLink } from "react-router-dom";

import styles from "./links-list-item.module.css";

const LinksListItem = ({ title, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => {
        return isActive ? styles["links-list-item_active"] : styles["links-list-item"];
      }}
    >
      <span className={styles["links-list-item-title"]}>
        {title}
      </span>
    </NavLink>
  );
};

export default LinksListItem;