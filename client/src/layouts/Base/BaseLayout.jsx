import styles from "./base-layout.module.css";

const BaseLayout = ({ children }) => {
  return (
    <div className={styles["base-layout"]}>
      {children}
    </div>
  )
};

export default BaseLayout;
