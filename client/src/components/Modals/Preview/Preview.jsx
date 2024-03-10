import BaseModal from "../BaseModal/BaseModal";

import styles from "./preview.module.css";

const PreviewModal = ({ open, onOutsideClick, src }) => {
  return (
    <BaseModal open={open} onOutsideClick={onOutsideClick}>
      <div className={styles["preview-modal-content"]}>
        <img src={src} />
      </div>
    </BaseModal>
  );
};

export default PreviewModal;