import { getUserInitials } from "@/utils/user";
import styles from "./account.module.css";

import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const AccountSection = ({ currentUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("currentUserId");

    navigate("/");
  };

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
      <button className={styles["account-logout-btn"]} onClick={handleLogout}>
        <FiLogOut color="var(--primary-white-color)" size="1.25rem" />
        Log Out
      </button>
    </div>
  );
};

export default AccountSection;
