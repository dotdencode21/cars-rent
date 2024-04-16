import BaseButton from "@/components/Buttons/BaseButton/BaseButton";
import styles from "./base-modal.module.css";
import { IoClose } from "react-icons/io5";
import cn from "classnames";

const BaseModal = ({
  open,
  title = "",
  submitBtnText = "",
  cancelBtnText = "",
  withHeader = true,
  withActions = true,
  maxWidth = 0,
  className = "",
  onOutsideClick = () => {},
  onClose = () => {},
  onSubmit = () => {},
  onCancel = () => {},
  children,
}) => {
  return (
    <>
      {open && (
        <div className={styles["base-modal"]} onClick={onOutsideClick}>
          <div
            style={{ maxWidth: `${maxWidth / 16}rem` }}
            className={cn({
              [styles["base-modal-body"]]: true,
              [className || ""]: !!className,
            })}
          >
            {withHeader && (
              <div className={styles["base-modal-body-header"]}>
                <span className={styles["base-modal-body-header-title"]}>
                  {title}
                </span>
                <IoClose
                  onClick={onClose}
                  color="var(--primary-black-color)"
                  size="1.75rem"
                  style={{ cursor: "pointer" }}
                />
              </div>
            )}
            {children}
            {withActions && (
              <div className={styles["base-modal-body-footer"]}>
                <BaseButton
                  onClick={onCancel}
                  label={cancelBtnText}
                  className={cn(
                    styles["base-modal-body-footer-btn"],
                    styles["cancel-btn"]
                  )}
                />
                <BaseButton
                  onClick={onSubmit}
                  label={submitBtnText}
                  className={cn(
                    styles["base-modal-body-footer-btn"],
                    styles["submit-btn"]
                  )}
                />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default BaseModal;
