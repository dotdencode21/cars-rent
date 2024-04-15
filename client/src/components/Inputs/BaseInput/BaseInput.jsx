import { useId } from "react";
import cn from "classnames";

import styles from "./base-input.module.css";

const BaseInput = ({
  value,
  hasIcons = false,
  hasButtons = false,
  leftIcon,
  rightIcon,
  type = "text",
  labelText = "",
  placeholder,
  inputId,
  name,
  onChange,
  onClick,
  onKeyDown = null,
  className = "",
  error,
}) => {
  const id = useId();

  return (
    <label htmlFor={id + inputId} className={styles["base-input-label"]}>
      {labelText}
      {hasIcons && (
        <div className={`${styles["base-input-icon"]} ${styles["left-icon"]}`}>
          {leftIcon}
        </div>
      )}
      <input
        type={type}
        name={name}
        value={value}
        style={{
          padding: `0.5rem ${
            hasIcons && rightIcon ? "2.5rem" : "0.75rem"
          } 0.5rem ${hasIcons && leftIcon ? "2.5rem" : "0.75rem"}`,
        }}
        className={cn({
          [styles["base-input"]]: true,
          [className || ""]: !!className,
        })}
        id={id + inputId}
        placeholder={placeholder}
        autoComplete="off"
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      {hasButtons && (
        <button
          className={`${styles["base-input-icon"]} ${styles["right-icon"]}`}
          onClick={onClick}
        >
          {rightIcon}
        </button>
      )}
      {error && <span className={styles["base-input-error"]}>{error}</span>}
    </label>
  );
};

export default BaseInput;
