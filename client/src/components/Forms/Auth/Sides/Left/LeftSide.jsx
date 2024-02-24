import styles from "./left-side.module.css";

import { Link } from "react-router-dom";

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import { FaArrowLeft } from "react-icons/fa6";

const LeftSide = ({ isSignUpForm }) => {
  return (
    <div className={styles["left-side"]}>
      <Link
        to="/"
        className={styles["back-link"]}
      >
        <div className={styles["back-link-icon-stroke"]}>
          <FaArrowLeft className={styles["back-link-icon-stroke-icon"]}/>
        </div>
        Back
      </Link>
      <span className={styles["left-side-label"]}>
        {
          isSignUpForm ? 
            "Still not registered? Hurry up, fill out the form and let's go!" : 
            "gggg"
        }
      </span>
      <div className={styles["left-side-social-media"]}>
        <span className={styles["left-side-social-media-label"]}>
          Our social networks:
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