import styles from "./why-choose-us.module.css";
import { adventagesData } from "@/mock/adventages.data";
import AdventageCard from "@/components/Cards/Adventage/AdventageCard";
import { useTranslation } from "react-i18next";

const WhyChooseUsSection = () => {
  const { t } = useTranslation();

  const getVariants = ({ order }) => {
    return {
      hidden: {
        x: (order === 1 && -75) || (order === 3 && 75),
        y: order === 2 && 75,
        opacity: 0,
        transition: {
          duration: 0.5
        }
      },
      visible: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.5
        }
      }
    };
  };

  return (
    <div className={styles["why-choose-us-section"]}>
      <span className={styles["why-choose-us-section-title"]}>
        {t("Why choose us section title")}
      </span>
      <div className={styles["why-choose-us-section-adventages"]}>
        {
          adventagesData.map(adventage => {
            return (
              <AdventageCard
                key={adventage.id}
                variants={getVariants(adventage)}
                {...adventage}
              />
            )
          })
        }
      </div>
    </div>
  )
};

export default WhyChooseUsSection;