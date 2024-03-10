import { Link } from "react-router-dom";

import styles from "./link-button.module.css";

const LinkButton = ({ label, to, buttonStyle, labelStyle }) => {
  return (
    <Link
      to={`/${to}`}
      className={styles["link-button"]}
      style={buttonStyle}
    >
      <span
        className={styles["link-button-label"]}
        style={labelStyle}
      >
        {label}
      </span>
    </Link>
  );
};

export default LinkButton;