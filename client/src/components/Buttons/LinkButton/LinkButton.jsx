import { Link } from "react-router-dom";

import styles from "./link-button.module.css";

const LinkButton = ({ label, to }) => {
  return (
    <Link
      to={`/${to}`}
      className={styles["link-button"]}
    >
      <span className={styles["link-button-label"]}>
        {label}
      </span>
    </Link>
  );
};

export default LinkButton;