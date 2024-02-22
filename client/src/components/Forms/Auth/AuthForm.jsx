import styles from "./auth-form.module.css";

const AuthForm = ({ authType = "signIn" }) => {
  return (
    <div className={styles["auth-form"]}>
      <div className={styles["auth-form-left"]}>
        1
      </div>
      <div className={styles["auth-form-right"]}>
        2
      </div>
    </div>
  )
};

export default AuthForm;