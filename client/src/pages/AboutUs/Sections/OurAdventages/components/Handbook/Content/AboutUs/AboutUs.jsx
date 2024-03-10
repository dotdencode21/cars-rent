import LinkButton from "@/components/Buttons/LinkButton/LinkButton";
import styles from "./about-us.module.css";
import { useTranslation } from "react-i18next";

const AboutUsContent = () => {
  const { t } = useTranslation();

  return (
    <div className={styles["about-us-content"]}>
      <div className={styles["about-us-content-heading"]}>
        <span className={styles["about-us-content-heading-title"]}>
          {t("Our adventages section about us tab title")}
        </span>
        <ul className={styles["about-us-content-grid"]}>
          {
            [
              t("Our adventages section about us tab sedans types"),
              t("Our adventages section about us tab SUVs types"),
              t("Our adventages section about us tab buses types"),
              t("Our adventages section about us tab hatchbacks types"),
              t("Our adventages section about us tab MPVs types"),
              t("Our adventages section about us tab electric cars types")
            ].map((brand, brandIndex) => {
              return (
                <li 
                  key={brandIndex}
                  className={styles["about-us-content-grid-item"]}
                >
                  <span className={styles["about-us-content-grid-item-title"]}>
                    {brand}
                  </span>
                </li>
              );
            })
          }
        </ul>
      </div>
      <div className={styles["about-us-content-actions"]}>
        <LinkButton
          label={t("Our adventages section read more link")}
          to="#"
          buttonStyle={{ padding: "1.75rem 3.75rem" }} 
        />
        <LinkButton 
          label={t("Our adventages section contact us link")} 
          to="contact"
          buttonStyle={{ 
            padding: "1.75rem 3.75rem", 
            backgroundColor: "transparent", 
            border: "1px solid var(--primary-black-color)", 
          }}
          labelStyle={{ color: "var(--primary-black-color)" }}
        />
      </div>
    </div>
  );
};

export default AboutUsContent;
