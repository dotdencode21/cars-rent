import { useUserStore } from "@/store/user.store";
import { useEffect } from "react";
import styles from "./profile-page.module.css";
import AccountSection from "./Sections/Account/Account";
import Sidebar from "@/components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const ProfilePage = () => {
  const { currentUser, getUserById } = useUserStore();

  useEffect(() => {
    const userId = JSON.parse(localStorage.getItem("currentUserId"));

    getUserById(userId);
  }, []);

  return (
    <div className={styles["profile-page"]}>
      <AccountSection currentUser={currentUser} />
      <div className={styles["profile-page-content"]}>
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default ProfilePage;
