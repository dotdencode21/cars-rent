import { useEffect } from "react";
import styles from "./profile-layout.module.css";
import Navbar from "@/components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";

const ProfileLayout = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const currentUserId = localStorage.getItem("currentUserId");
    const accessToken = localStorage.getItem("access_token");

    if (!(currentUserId && accessToken)) {
      navigate("/");
    }
  }, []);

  return (
    <div className={styles["profile-layout"]}>
      <Navbar />
      {children}
    </div>
  );
};

export default ProfileLayout;
