import LinkButton from "@/components/Buttons/LinkButton/LinkButton";
import BaseModal from "../BaseModal/BaseModal";

import styles from "./not-logged.module.css";

import { PiWarningCircleFill } from "react-icons/pi";

const NotLoggedModal = ({ open, onClose }) => {
  return (
    <BaseModal
      open={open}
      onClose={onClose}
      maxWidth={550}
      withActions={false}
      onCancel={onClose}
    >
      <div className={styles["not-logged"]}>
        <PiWarningCircleFill color="var(--primary-red-color)" size="7rem" />
        <span className={styles["not-logged-title"]}>
          You must be a registered user to be able <br /> to add cars to your
          favorites
        </span>
        <LinkButton to="sign-in" label="Sign in" />
      </div>
    </BaseModal>
  );
};

export default NotLoggedModal;
