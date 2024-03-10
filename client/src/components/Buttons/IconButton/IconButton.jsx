import styles from "./icon-button.module.css";

const IconButton = ({ icon, onClick }) => {
  return (
    <button
      className={styles["icon-button"]}
      onClick={onClick}
    >
      {icon}
    </button>
  );
};

export default IconButton;