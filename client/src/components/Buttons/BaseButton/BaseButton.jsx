import styles from "./base-button.module.css";

const BaseButton = ({ 
  label, 
  isFullWidth = false,
  onClick,
  disabled
}) => {
  return (
    <button
      style={{ width: isFullWidth ? "100%" : "none" }}
      className={styles["base-button"]}
      onClick={onClick}
      disabled={disabled}
    >
      <span className={styles["base-button-label"]}>
        {label}
      </span>
    </button>
  )
};

export default BaseButton;