import CarAnimation from "@/components/Animation/CarAnimation";
import styles from "./auth-form.module.css";

import LeftSide from "./Sides/Left/LeftSide";
import RightSide from "./Sides/Right/RightSide";

const AuthForm = ({ authType = "signIn" }) => {
  return (
    <div className={styles["auth-form"]}>
      <LeftSide authType={authType} />
      <RightSide authType={authType} />
    </div>
  );
};

export default AuthForm;