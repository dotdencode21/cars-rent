import styles from "./base-button.module.css";
import cn from "classnames";

const BaseButton = ({
  label,
  isFullWidth = false,
  onClick,
  disabled,
  className = "",
  style = {},
}) => {
  return (
    <button
      style={{ width: isFullWidth ? "100%" : "none", ...style }}
      className={cn({
        [styles["base-button"]]: true,
        [className || ""]: !!className,
      })}
      onClick={onClick}
      disabled={disabled}
    >
      <span className={styles["base-button-label"]}>{label}</span>
    </button>
  );
};

export default BaseButton;
