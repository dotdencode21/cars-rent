import { Link } from "react-router-dom";
import styles from "./copyright-section.module.css";

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const SOCIAL_MEDIA = {
  facebook: <FaFacebookF className={styles["copyright-social-media-icon"]} />,
  twitter: <FaTwitter className={styles["copyright-social-media-icon"]} />,
  google: <FaGooglePlusG className={styles["copyright-social-media-icon"]} />,
  instagram: <FaInstagram className={styles["copyright-social-media-icon"]} />
};

const CopyrightSection = () => {
  const { t } = useTranslation();

  return (
    <div className={styles["copyright-section"]}>
      <span className={styles["copyright-label"]}>
        &copy; 2024 Cars Rent. {t("Footer copyright")}
      </span>
      <div className={styles["copyright-social-media"]}>
        {
          ["facebook", "twitter", "google", "instagram"].map((item, itemIndex) => {
            return (
              <Link
                key={itemIndex}
                to="#"
                className={styles["copyright-social-media-link"]}
              >              
               {SOCIAL_MEDIA[item]}
              </Link>
            );
          })
        }
      </div>
      <Link
        to="/privacy-policy"
        className={styles["copyright-policy-link"]}
      >
        {t("Footer privacy policy")}
      </Link>
    </div>
  );
};

export default CopyrightSection;