import { useTranslation } from "react-i18next";
import styles from "./statistics-cell.module.css";
import { STATISTICS_TITLES } from "@/constants/ourExperience";
import { useEffect, useMemo, useState } from "react";

const StatisticsCell = ({ value, title, isIntersectingElement }) => {
  const { t } = useTranslation();
  const [currentValue, setCurrentValue] = useState(0);

  const formattedValue = useMemo(() => {
    return new Intl.NumberFormat("en-US", {
      notation: "compact"
    }).format(currentValue);
  }, [currentValue]);

  useEffect(() => {
    let timeoutRef = null;
    
    if (isIntersectingElement && currentValue !== value) {   
      timeoutRef = setTimeout(() => {
        setCurrentValue(prev => prev + 1);
      }, value >= 1000 ? 0.5 : value >= 50 ? 25 : 100);
    };

    return () => clearTimeout(timeoutRef);
  }, [currentValue, isIntersectingElement]);

  return (
    <div className={styles["statistics-cell"]}>
      <span className={styles["statistics-cell-value"]}>
        {formattedValue}
      </span>
      <span className={styles["statistics-cell-title"]}>
        {t(STATISTICS_TITLES[title])}
      </span>
  </div>
  );
};

export default StatisticsCell;