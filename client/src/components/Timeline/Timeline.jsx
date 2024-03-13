import { useTranslation } from "react-i18next";
import styles from "./timeline.module.css";

const Timeline = () => {
  const { t } = useTranslation();

  return (
    <div className={styles["timeline"]}>
      {
        [
          { title: t("Timeline component first title"), year: 1999 },
          { title: t("Timeline component second title"), year: 2005 },
          { title: t("Timeline component third title"), year: 2010 },
          { title: t("Timeline component fourth title"), year: 2024 },
        ].map((timeline, timelineIndex) => {
          return (
            <div
              key={timelineIndex}
              className={styles["timeline-item"]}
            >
              <span className={styles["timeline-item-title"]}>
                {timeline.title}
              </span>
              <div className={styles["timeline-item-circle"]}/>
              <span className={styles["timeline-item-year"]}>
                {timeline.year}
              </span>
            </div>
          );
        })
      }
    </div>
  );
};

export default Timeline;