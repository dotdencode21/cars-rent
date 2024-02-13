import styles from "./column.module.css";

import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { TbLocationFilled } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LinkButton from "@/components/Buttons/LinkButton/LinkButton";

const Column = ({ title }) => {
  const { t } = useTranslation();

  const {
    isAboutUsColumn, 
    isPopularNewsColumn, 
    isQuickLinksColumn 
  } = {
    isAboutUsColumn: title === "ABOUT_US",
    isPopularNewsColumn: title === "POPULAR_NEWS",
    isQuickLinksColumn: title === "QUICK_LINKS"
  }

  const formattedTitle = () => title.split("_").join(" ");

  return (
    <div className={styles["column"]}>
      <span className={styles["column-title"]}>
        {
          formattedTitle() === "ABOUT US" ? t("Navbar about page label") :
          formattedTitle() === "POPULAR NEWS" ? t("Footer news column title") :
          t("Footer links column title")
        }
      </span>
      {
        isAboutUsColumn && (
          <div className={styles["column-about-us"]}>
            <div className={styles["column-about-us-row"]}>
              <FaPhoneAlt className={styles["column-about-us-row-icon"]} />
              <span className={styles["column-about-us-row-title"]}>
                +1 323-913-4688
              </span>
            </div>
            <div className={styles["column-about-us-row"]}>
              <FaEnvelope className={styles["column-about-us-row-icon"]} />
              <span className={styles["column-about-us-row-title"]}>
                info@demolink.org
              </span>
            </div>
            <div className={styles["column-about-us-row"]}>
              <TbLocationFilled className={styles["column-about-us-row-icon"]} />
              <span className={styles["column-about-us-row-title"]}>
                4730 Crystal Springs Dr, Los Angeles, CA 90027
              </span>
            </div>
          </div>
        )
      }
      {
        isPopularNewsColumn && (
          <div className={styles["column-popular-news"]}>
            <div className={styles["column-popular-news-wrapper"]}>
              <span className={styles["column-popular-news-wrapper-title"]}>
                {t("Footer 1st news title")}
              </span>
              <span className={styles["column-popular-news-wrapper-subtitle"]}>
                {t("Footer news may month label")} 04, 2024
              </span>
            </div>
            <div className={styles["column-popular-news-wrapper"]}>
              <span className={styles["column-popular-news-wrapper-title"]}>
                {t("Footer 2st news title")}
              </span>
              <span className={styles["column-popular-news-wrapper-subtitle"]}>
                {t("Footer news may month label")} 04, 2024
              </span>
            </div>
          </div>
        )
      }
      {
        isQuickLinksColumn && (
          <div className={styles["column-quick-links"]}>
            <div className={styles["column-quick-links-wrapper"]}>
              {
                [
                  { title: "Navbar about page label", to: "/about" },
                  { title: "Navbar cars page label", to: "/cars" },
                  { title: "Navbar contact page label", to: "/contact" }
                ].map((link, linkIndex) => {
                  return (
                    <NavLink
                      key={linkIndex}
                      to={link.to}
                      className={styles["column-quick-links-wrapper-link"]}
                    >
                      {t(link.title)}
                    </NavLink>
                  )
                })
              }
            </div>
            <LinkButton
              label={t("Footer find car btn")}
              to="cars"
            />
          </div>
        )
      }
    </div>
  );
};

export default Column;