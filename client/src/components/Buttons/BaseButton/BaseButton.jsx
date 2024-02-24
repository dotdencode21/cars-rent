import styles from "./base-button.module.css";

const BaseButton = ({ label }) => {
  return (
    <button className={styles["base-button"]}>
      <span className={styles["base-button-label"]}>
        {label}
      </span>
    </button>
  )
};

export default BaseButton;