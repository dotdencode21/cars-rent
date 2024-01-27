import { Outlet } from "react-router-dom";
import styles from "./main-layout.module.css";

const MainLayout = () => {
  return (
    <div className={styles["main-layout"]}>
      <span>Navbar</span>
      <Outlet />
      <span>Footer</span>
    </div>
  )
};

export default MainLayout;
