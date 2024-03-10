import CircleChart from "@/components/Charts/Circle/Circle";
import styles from "./our-values.module.css";

import LinkButton from "@/components/Buttons/LinkButton/LinkButton";
import { useTranslation } from "react-i18next";

const OurValuesContent = () => {
  const { t } = useTranslation();

  return (
    <div className={styles["our-values-content"]}>
      <div className={styles["our-values-content-charts"]}>
        {
          [
            { title: t("Circle chart component dedication title"), color: "var(--primary-red-color)", percentage: 87 },
            { title: t("Circle chart component knowledge title"), color: "var(--primary-orange-color)", percentage: 74 },
            { title: t("Circle chart component professionalism title"), color: "var(--primary-green-color)", percentage: 94 },
          ].map((chart, chartIndex) => {
            return <CircleChart key={chartIndex} {...chart} />
          })
        }
      </div>
      <div className={styles["our-values-content-actions"]}>
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

export default OurValuesContent;