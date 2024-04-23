import styles from "./auth-form.module.css";

import LeftSide from "./Sides/Left/LeftSide";
import RightSide from "./Sides/Right/RightSide";

const AuthForm = ({ authType = "signIn" }) => {
  const isSignUpForm = authType === "signUp";

  return (
    <div className={styles["auth-form"]}>
      <LeftSide isSignUpForm={isSignUpForm} />
      <RightSide isSignUpForm={isSignUpForm} />
    </div>
  );
};

export default AuthForm;
