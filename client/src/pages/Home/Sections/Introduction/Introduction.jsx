import { useEffect, useState } from "react";
import styles from "./introduction.module.css";
import IntroductionForm from "@/components/Forms/Introduction/Introduction";
import { useTranslation } from "react-i18next";

const IntroductionSection = () => {
  const [preferences, setPreferences] = useState({
    brand: "Any brand",
    type: "Any type",
    price: "Price low to high"
  });

  const { t } = useTranslation();

  const handleClick = ({ name, value }) => {
    return setPreferences(prev => ({ ...prev, [name]: value }));
  }

  return (
    <div className={styles["introduction-section"]}>
      <span className={styles["introduction-section-title"]}>
        {t("Introduction section title")}
      </span>
      <span className={styles["introduction-section-subtitle"]}>
        {t("Introduction section subtitle")}
      </span>
      <IntroductionForm onClick={handleClick} />
    </div>
  );
};

export default IntroductionSection;