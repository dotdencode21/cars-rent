import styles from "./our-experience.module.css";

import MercedesBrand from "@/assets/imgs/brands/mercedes.png";
import AudiBrand from "@/assets/imgs/brands/audi.png";
import TeslaBrand from "@/assets/imgs/brands/tesla.png";
import CitroenBrand from "@/assets/imgs/brands/citroen.png";

import OurExperienceImg from "@/assets/imgs/sections/ourExperience/our-experience-img-1.jpg";
import LinkButton from "@/components/Buttons/LinkButton/LinkButton";
import { useTranslation } from "react-i18next";
import Brand from "./Sections/Brand/Brand";

import { motion } from "framer-motion";
import StatisticsCell from "./Sections/StatisticsCell/StatisticsCell";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

import { useRef } from "react";

const OurExperienceSection = () => {
  const { t } = useTranslation();
  const statisticsRef = useRef(null);
  const isIntersectingElement = useIntersectionObserver({ rootEl: statisticsRef });

  const brandVariants = {
    hidden: {
      x: -125,
      opacity: 0,
      transition: {
        duration: 1.25,
      }
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1.25,
      }
    }
  };

  return (
    <div className={styles["our-experience-section"]}>
      <div className={styles["our-experience-section-wrapper"]}>
        <div id="observable" className={styles["our-experience-section-wrapper-description"]}>
          <img
            className={styles["our-experience-section-wrapper-description-img"]}
            src={OurExperienceImg} 
          />
          <div className={styles["our-experience-section-wrapper-description-content"]}>
            <span className={styles["our-experience-section-wrapper-description-content-title"]}>
              {t("Our experience section content title")}
            </span>
            <span className={styles["our-experience-section-wrapper-description-content-subtitle"]}>
              {t("Our experience section content subtitle")}
            </span>
            <LinkButton
              to="cars"
              label={t("Footer find car btn")}
            />
          </div>
        </div>
        <div
          ref={statisticsRef}
          className={styles["our-experience-section-wrapper-statistics"]}
        >
          {
            [
              { title: "Happy clients", value: 3700 },
              { title: "Cars", value: 96 },
              { title: "Car types", value: 10 },
              { title: "Brands", value: 16 },
            ].map((statistic, statisticIndex) => {
              return (
                <StatisticsCell 
                  key={statisticIndex}
                  isIntersectingElement={isIntersectingElement}
                  {...statistic}
                />
              );
            })
          }
        </div>
      </div>
      <motion.div 
        className={styles["our-experience-section-brands"]}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3, once: true }}
        variants={brandVariants}
      >
        {
          [MercedesBrand, AudiBrand, TeslaBrand, CitroenBrand].map((brand, brandIndex) => {
            return <Brand key={brandIndex} brand={brand}/>;
          })
        }
      </motion.div>
    </div>
  );
};

export default OurExperienceSection;