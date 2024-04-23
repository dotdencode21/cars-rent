import { useUserStore } from "@/store/user.store";
import styles from "./user-details.module.css";

import { FaUser, FaCalendar } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { BsGenderAmbiguous } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { RiAdminFill } from "react-icons/ri";

const UserDetailsSection = () => {
  const { currentUser } = useUserStore();

  return (
    <div className={styles["user-details-section"]}>
      <div className={styles["user-details-section-item"]}>
        <FaUser color="var(--primary-green-color)" size="1.25rem" />
        <span className={styles["user-details-section-item-label"]}>
          {currentUser?.fullName || "Not specified"}
        </span>
      </div>
      <div className={styles["user-details-section-item"]}>
        <IoMail color="var(--primary-green-color)" size="1.25rem" />
        <span
          className={styles["user-details-section-item-label"]}
          data-email-field
        >
          {currentUser?.email || "Not specified"}
        </span>
      </div>
      <div className={styles["user-details-section-item"]}>
        <FaCalendar color="var(--primary-green-color)" size="1.25rem" />
        <span className={styles["user-details-section-item-label"]}>
          {currentUser?.age || "Not specified"}
        </span>
      </div>
      <div className={styles["user-details-section-item"]}>
        <BsGenderAmbiguous color="var(--primary-green-color)" size="1.25rem" />
        <span className={styles["user-details-section-item-label"]}>
          {currentUser?.gender || "Not specified"}
        </span>
      </div>
      <div className={styles["user-details-section-item"]}>
        <FaLocationDot color="var(--primary-green-color)" size="1.25rem" />
        <span className={styles["user-details-section-item-label"]}>
          {currentUser?.location || "Not specified"}
        </span>
      </div>
      <div className={styles["user-details-section-item"]}>
        <RiAdminFill color="var(--primary-green-color)" size="1.25rem" />
        <span className={styles["user-details-section-item-label"]}>
          {currentUser?.role || "Not specified"}
        </span>
      </div>
    </div>
  );
};

export default UserDetailsSection;
