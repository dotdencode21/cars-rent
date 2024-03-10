import styles from "./left-side.module.css";

import { Link } from "react-router-dom";

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import { FaArrowLeft } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

const LeftSide = ({ isSignUpForm }) => {
  const { t } = useTranslation();

  return (
    <div className={styles["left-side"]}>
      <Link
        to="/"
        className={styles["back-link"]}
      >
        <div className={styles["back-link-icon-stroke"]}>
          <FaArrowLeft className={styles["back-link-icon-stroke-icon"]}/>
        </div>
        {t("Auth form back link title")}
      </Link>
      <span 
        className={styles["left-side-label"]}
        style={{ maxWidth: isSignUpForm ? "21.0625rem" : "20.6875rem" }}
      >
        {
          isSignUpForm ? t("Auth form sign up text") : t("Auth form sign in text")
        }
      </span>
      <div className={styles["left-side-social-media"]}>
        <span className={styles["left-side-social-media-label"]}>
          {t("Auth form social networks label")}
        </span>
        <div className={styles["left-side-social-media-wrapper"]}>
          {
            [
              <FaFacebookF className={styles["left-side-social-media-wrapper-icon"]} />,
              <FaTwitter className={styles["left-side-social-media-wrapper-icon"]} />,
              <FaGooglePlusG className={styles["left-side-social-media-wrapper-icon"]} />,
              <FaInstagram className={styles["left-side-social-media-wrapper-icon"]} />
            ].map((socialMediaIcon, socialMediaIconIndex) => {
              return (
                <Link
                  key={socialMediaIconIndex}
                  to="#"
                  className={styles["left-side-social-media-wrapper-icon-link"]}
                >
                  {socialMediaIcon}
                </Link>
              );  
            })
          }
        </div>
      </div>
    </div>
  );
};

export default LeftSide;