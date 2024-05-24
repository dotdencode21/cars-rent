import styles from "./introduction.module.css";
import IntroductionForm from "@/components/Forms/Introduction/IntroductionForm";
import { useCarStore } from "@/store/car.store";
import { useTranslation } from "react-i18next";

const IntroductionSection = () => {
  const { t } = useTranslation();

  const { cars } = useCarStore();

  return (
    <div className={styles["introduction-section"]}>
      <span className={styles["introduction-section-title"]}>
        {t("Introduction section title")}
      </span>
      <span className={styles["introduction-section-subtitle"]}>
        {t("Introduction section subtitle")}
      </span>
      <IntroductionForm cars={cars} />
    </div>
  );
};

export default IntroductionSection;
