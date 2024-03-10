import styles from "./base-modal.module.css";

const BaseModal = ({ open, onOutsideClick, children }) => {
  return (
    <>
      {
        open && (
          <div 
            className={styles["base-modal"]}
            onClick={onOutsideClick}
          >
            {children}
          </div>
        )
      }
    </>
  );
};

export default BaseModal;