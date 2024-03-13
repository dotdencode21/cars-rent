import styles from "./popular-brands.module.css";

import MercedesBrand from "@/assets/imgs/brands/mercedes.png";
import AudiBrand from "@/assets/imgs/brands/audi.png";
import TeslaBrand from "@/assets/imgs/brands/tesla.png";
import CitroenBrand from "@/assets/imgs/brands/citroen.png";
import Brand from "@/pages/Home/Sections/OurExperience/Sections/Brand/Brand";
import { useTranslation } from "react-i18next";

const PopularBrandsSection = () => {
  const { t } = useTranslation();

  return (
    <div className={styles["popular-brands-section"]}>
      <span className={styles["popular-brands-section-title"]}>
        {t("Popular brands section title")}
      </span>
      <div className={styles["popular-brands-section-grid"]}>
        {
          [MercedesBrand, AudiBrand, TeslaBrand, CitroenBrand].map((brand, brandIndex) => {
            return <Brand key={brandIndex} brand={brand} />
          })
        }
      </div>
    </div>
  );
};

export default PopularBrandsSection;