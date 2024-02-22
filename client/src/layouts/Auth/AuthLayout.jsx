import styles from "./auth-layout.module.css";

const AuthLayout = ({ children }) => {
  return (
    <div className={styles["auth-layout"]}>
      {children}
    </div>
  )
};

export default AuthLayout;