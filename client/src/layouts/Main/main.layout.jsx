import { Outlet } from "react-router-dom";
import styles from "./main-layout.module.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const MainLayout = () => {
  return (
    <div className={styles["main-layout"]}>
      <Navbar />
      <Outlet />     
      <Footer />
    </div>
  )
};

export default MainLayout;
