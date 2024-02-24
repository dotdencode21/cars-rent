import { useId } from "react";

import styles from "./base-input.module.css";

const BaseInput = ({
  leftIcon,
  rightIcon,
  type,
  labelText,
  placeholder,
  inputId,
  name,
  onChange
}) => {
  const id = useId();

  return (
    <label 
      htmlFor={id + inputId}
      className={styles["base-input-label"]}
    >
      {labelText}
      <div className={styles["base-input-left-icon"]}>
        {leftIcon}
      </div>
      <input
        type={type}
        name={name}
        style={{ padding: leftIcon && "0.5rem 0.75rem 0.5rem 2.5rem" }}
        className={styles["base-input"]}
        id={id + inputId}
        placeholder={placeholder}
        autoComplete="off"
        onChange={onChange}
      />
      <div>
        {rightIcon}
      </div>
    </label>
  );
};

export default BaseInput;