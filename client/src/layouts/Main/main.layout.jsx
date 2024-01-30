import { Outlet } from "react-router-dom";
import styles from "./main-layout.module.css";
import Navbar from "@/components/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div className={styles["main-layout"]}>
      <Navbar />
      <Outlet />     
      <span>Footer</span>
    </div>
  )
};

export default MainLayout;
