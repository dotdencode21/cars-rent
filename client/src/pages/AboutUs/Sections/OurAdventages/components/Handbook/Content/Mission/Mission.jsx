import ProgressChart from "@/components/Charts/Progress/Progress";
import styles from "./mission.module.css";
import { useTranslation } from "react-i18next";

const MissionContent = () => {
  const { t } = useTranslation();

  return (
    <div className={styles["mission-content"]}>
      <div className={styles["mission-content-heading"]}>
        <span className={styles["mission-content-heading-title"]}>
          {t("Our adventages section mission tab title")}
        </span>
      </div>
      <div className={styles["misson-content-charts"]}>
        {
          [
            { title: t("Progress chart component leadership title"), percentage: 79, color: "var(--primary-red-color)" },
            { title: t("Progress chart component customer service title"), percentage: 72, color: "var(--primary-orange-color)" },
            { title: t("Progress chart component communication title"), percentage: 88, color: "var(--primary-blue-color)" },
          ].map((chart, chartIndex) => {
            return <ProgressChart key={chartIndex} {...chart} />
          })
        }
      </div>
    </div>
  );
};

export default MissionContent;