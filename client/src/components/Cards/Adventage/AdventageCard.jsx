import { useMemo } from "react";
import styles from "./adventage-card.module.css";
import { FiStar } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { IoSunnyOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ADVENTAGES_CARD_SUBTITLE, ADVENTAGES_CARD_TITLE } from "@/constants/adventages";

const AdventageCar = ({ variants, title, subtitle, icon, order }) => {
  const { t } = useTranslation();

  const getCardIcon = useMemo(() => {
    return {
      star: <FiStar className={styles["adventage-card-icon"]} />,
      location: <IoLocationOutline className={styles["adventage-card-icon"]} />,
      sun: <IoSunnyOutline className={styles["adventage-card-icon"]} />
    }[icon];
  }, [icon]);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      custom={order}
      variants={variants}
      viewport={{ amount: 0.75, once: true }}
      className={styles["adventage-card"]}
    >
      {getCardIcon}
      <div className={styles["adventage-card-description"]}>
        <span className={styles["adventage-card-description-title"]}>
          {t(ADVENTAGES_CARD_TITLE[title])}
        </span>
        <span className={styles["adventage-card-description-subtitle"]}>
          {t(ADVENTAGES_CARD_SUBTITLE[subtitle])}
        </span>
      </div>
    </motion.div>
  )
};

export default AdventageCar;