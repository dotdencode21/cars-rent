import { getUserInitials } from "@/utils/user";
import styles from "./account.module.css";

const AccountSection = ({ currentUser }) => {
  return (
    <div className={styles["account"]}>
      <div className={styles["account-user"]}>
        <div
          className={styles["account-user-initials"]}
          style={{ backgroundColor: currentUser?.color }}
        >
          <span className={styles["account-user-initials-label"]}>
            {getUserInitials(currentUser?.fullName || "")}
          </span>
        </div>
        <div className={styles["account-user-details"]}>
          <span className={styles["account-user-details-name"]}>
            {currentUser?.fullName}
          </span>
          <span className={styles["account-user-details-email"]}>
            {currentUser?.email}
          </span>
        </div>
      </div>
      buttons
    </div>
  );
};

export default AccountSection;
