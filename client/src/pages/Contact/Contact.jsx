import GoogleMap from "@/components/GoogleMap/GoogleMap";
import styles from "./contact-page.module.css";
import { FaHouse } from "react-icons/fa6";
import { BsChatLeftDotsFill } from "react-icons/bs";

const ContactPage = () => {
  return (
    <div className={styles["contact-page"]}>
      <GoogleMap />
      <div className={styles["contact-page-wrapper"]}>
        <div className={styles["contact-page-wrapper-item"]}>
          <FaHouse color="var(--primary-blue-color)" size="3.5rem" />
          <div className={styles["contact-page-wrapper-item-details"]}>
            <span className={styles["contact-page-wrapper-item-title"]}>
              Zaporozhye, Verkhnyaya Khortitsa district, st. Nechipora Deykuna,
              16
            </span>
            <span className={styles["contact-page-wrapper-item-title"]}>
              Dnipro, Tsentralnyi district, st. Serhiya Podolyns'koho, 75
            </span>
            <span className={styles["contact-page-wrapper-item-title"]}>
              Kharkiv, Saltivskyi district, st. Sakhalinska, 14
            </span>
            <span className={styles["contact-page-wrapper-item-title"]}>
              Odesa, Moldavanka district, st. Sadykivs'ka, 2
            </span>
            <span className={styles["contact-page-wrapper-item-title"]}>
              Kyiv, Shuliavka district, st. Saksahanskoho, 9a
            </span>
            <span className={styles["contact-page-wrapper-item-title"]}>
              Lviv, Kleparow district, st. Akademika Kolessy, 15
            </span>
          </div>
        </div>
        <div className={styles["contact-page-wrapper-item"]}>
          <BsChatLeftDotsFill color="var(--primary-blue-color)" size="3.5rem" />
          <div className={styles["contact-page-wrapper-item-details"]}>
            <span className={styles["contact-page-wrapper-item-title"]}>
              carsrent@gmail.com
            </span>
            <span className={styles["contact-page-wrapper-item-title"]}>
              +380 (44) 1546034
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
