import { NavLink } from "react-router-dom";

import styles from "./links-list-item.module.css";

import cn from "classnames";

const LinksListItem = ({ title, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn({
          [styles["links-list-item"]]: true,
          [styles["links-list-item_active"]]: isActive,
        })
      }
    >
      <span className={styles["links-list-item-title"]}>{title}</span>
    </NavLink>
  );
};

export default LinksListItem;
