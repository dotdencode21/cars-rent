import styles from "./find-car-by-type.module.css";

import { IoCarOutline } from "react-icons/io5";
import { MdOutlineElectricBolt } from "react-icons/md";
import { TbCarSuv } from "react-icons/tb";
import { BsBusFront } from "react-icons/bs";
import { findCarByTypeData } from "@/mock/findCarByType.data";

import halfRoundedBlockImg from "@/assets/imgs/decor/half-rounded-block.svg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { CARS_TYPES_TITLES } from "@/constants/findCarByType";

import { motion } from "framer-motion";

const carTypeIcon = {
  "Sedan": <IoCarOutline className={styles["find-car-by-type-section-types-type-blurb-icon"]} />,
  "Electric Car": <MdOutlineElectricBolt className={styles["find-car-by-type-section-types-type-blurb-icon"]} />,
  "SUV": <TbCarSuv className={styles["find-car-by-type-section-types-type-blurb-icon"]} />,
  "Bus & Coach": <BsBusFront className={styles["find-car-by-type-section-types-type-blurb-icon"]} />
};

const FindCarByTypeSection = () => {
  const { t } = useTranslation();

  const variants = {
    hidden: isDelay => ({
      y: 35,
      opacity: 0,
      transition: {
        duration: isDelay ? 1.5 : 1,
        ease: "easeInOut"
      }
    }),
    visible: isDelay => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: isDelay ? 1.5 : 1,
        ease: "easeInOut"
      }
    })
  };

  return (
    <div className={styles["find-car-by-type-section"]}>
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2, once: true }}
        variants={variants}
        custom={false}
        className={styles["find-car-by-type-section-title"]}
      >
        {t("Find car by type section title")}
      </motion.span>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.25, once: true }}
        variants={variants}
        custom={true}
        className={styles["find-car-by-type-section-types"]}
      >
        {
          findCarByTypeData.map(type => {
            return (
              <div
                key={type.id}
                className={styles["find-car-by-type-section-types-type"]}
              >
                <div className={styles["find-car-by-type-section-types-type-blurb"]}>
                  {carTypeIcon[type.title]}
                </div>
                <img src={halfRoundedBlockImg} />
                <div className={styles["find-car-by-type-section-types-type-details"]}>
                  <span className={styles["find-car-by-type-section-types-type-details-title"]}>
                    {t(CARS_TYPES_TITLES[type.title])}
                  </span>
                  <span className={styles["find-car-by-type-section-types-type-details-amount"]}>
                    {type.amount} {t("Find car by type section cars amount label")}
                  </span>
                  <Link
                    to="#"
                    className={styles["find-car-by-type-section-types-type-details-link"]}
                  >
                    {t("Find car by type section link title")}
                  </Link>
                </div>
              </div>
            )
          })
        }
      </motion.div>
    </div>
  );
};

export default FindCarByTypeSection;

