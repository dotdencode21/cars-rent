import styles from "./our-experience.module.css";

import MercedesBrand from "@/assets/imgs/brands/mercedes.png";
import AudiBrand from "@/assets/imgs/brands/audi.png";
import TeslaBrand from "@/assets/imgs/brands/tesla.png";
import CitroenBrand from "@/assets/imgs/brands/citroen.png";

import OurExperienceImg from "@/assets/imgs/sections/our-experience/our-experience-img-1.jpg";
import LinkButton from "@/components/Buttons/LinkButton/LinkButton";

const OurExperienceSection = () => {
  return (
    <div className={styles["our-experience-section"]}>
      <div className={styles["our-experience-section-wrapper"]}>
        <div className={styles["our-experience-section-wrapper-description"]}>
          <img
            className={styles["our-experience-section-wrapper-description-img"]}
            src={OurExperienceImg} 
          />
          <div className={styles["our-experience-section-wrapper-description-content"]}>
            <span className={styles["our-experience-section-wrapper-description-content-title"]}>
              15+ Years of Experience
            </span>
            <span className={styles["our-experience-section-wrapper-description-content-subtitle"]}>
              With more than 15 years of experience, our team offers quality car rental services to all US guests and residents.
            </span>
            <LinkButton 
              to="cars"
              label={"Find a car"}
            />
          </div>
        </div>
        <div className={styles["our-experience-section-wrapper-statistics"]}>
          {
            [
              { title: "Happy clients", value: "20k" },
              { title: "Cars", value: "14k" },
              { title: "Car types", value: "10" },
              { title: "Brands", value: "16" },
            ].map((statistic, statisticIndex) => {
              return (
                <div
                  key={statisticIndex}
                  className={styles["our-experience-section-wrapper-statistics-item"]}
                >
                  <span className={styles["our-experience-section-wrapper-statistics-item-value"]}>
                    {statistic.value}
                  </span>
                  <span className={styles["our-experience-section-wrapper-statistics-item-title"]}>
                    {statistic.title}
                  </span>
                </div>
              );
            })
          }
        </div>
      </div>
      <div className={styles["our-experience-section-brands"]}>
        {
          [MercedesBrand, AudiBrand, TeslaBrand, CitroenBrand].map((brand, brandIndex) => {
            return (
              <div
                key={brandIndex}
                className={styles["our-experience-section-brands-brand"]}
              >
                <img
                  src={brand}
                  className={styles["our-experience-section-brands-brand-img"]}
                />
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default OurExperienceSection;