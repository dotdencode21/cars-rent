import { getUserInitials } from "@/utils/user";
import { Link } from "react-router-dom";
import styles from "./avatar.module.css";

const Avatar = ({ currentUser }) => {
  return (
    <Link
      to="/"
      className={styles["avatar"]}
      style={{ backgroundColor: currentUser?.color }}
    >
      <span className={styles["avatar-label"]}>
        {getUserInitials(currentUser?.fullName)}
      </span>
    </Link>
  );
};

export default Avatar;
