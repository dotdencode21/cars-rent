import BaseModal from "../BaseModal/BaseModal";

import styles from "./preview.module.css";

const PreviewModal = ({ open, onOutsideClick, src }) => {
  return (
    <BaseModal
      open={open}
      onOutsideClick={onOutsideClick}
      withHeader={false}
      withActions={false}
      className={styles["preview-modal-body"]}
    >
      <div className={styles["preview-modal-content"]}>
        <img src={src} />
      </div>
    </BaseModal>
  );
};

export default PreviewModal;
