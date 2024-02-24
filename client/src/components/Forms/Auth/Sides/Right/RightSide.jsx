import BaseInput from "@/components/Inputs/BaseInput/BaseInput";
import styles from "./right-side.module.css";

import { FaArrowDownShortWide } from "react-icons/fa6";

const RightSide = ({ authType }) => {
  return (
    <div className={styles["right-side"]}>
      <form className={styles["right-side-form"]}>
        <BaseInput
          type="text"
          placeholder="Username"
          labelText="Username"
          inputId="username"
          name="username"
          leftIcon={<FaArrowDownShortWide size="1.5rem" color="red" />}
        />
        <BaseInput
          type="password"
          placeholder="Password"
          labelText="Password"
          inputId="password"
          name="password"
        />
      </form>
    </div>
  );
};

export default RightSide;