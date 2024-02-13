import CopyrightSection from "./Sections/Copyright/CopyrightSection";
import DetailsSection from "./Sections/Details/DetailsSection";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles["footer"]}>
      <DetailsSection />
      <CopyrightSection />
    </div>
  )
};

export default Footer;