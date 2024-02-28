import { useId } from "react";

import styles from "./base-input.module.css";

const BaseInput = ({
  value,
  leftIcon,
  rightIcon,
  type,
  labelText,
  placeholder,
  inputId,
  name,
  onChange,
  onClick,
  onBlur,
  onFocus,
  showError,
  error
}) => {
  const id = useId();

  return (
    <label 
      htmlFor={id + inputId}
      className={styles["base-input-label"]}
    >
      {labelText}
      <div className={`${styles["base-input-icon"]} ${styles["left-icon"]}`}>
        {leftIcon}
      </div>
      <input
        type={type}
        name={name}
        value={value}
        style={{ padding: `0.5rem ${rightIcon ? "2.5rem" : "0.75rem"} 0.5rem ${leftIcon ? "2.5rem" : "0.75rem"}` }}
        className={styles["base-input"]}
        id={id + inputId}
        placeholder={placeholder}
        autoComplete="off"
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
      />
      <button
        className={`${styles["base-input-icon"]} ${styles["right-icon"]}`}
        onClick={onClick}
      >
        {rightIcon}
      </button>
      {
        showError && (
          <span className={styles["base-input-error"]}>
            {error}
          </span>
        )
      }
    </label>
  );
};

export default BaseInput;