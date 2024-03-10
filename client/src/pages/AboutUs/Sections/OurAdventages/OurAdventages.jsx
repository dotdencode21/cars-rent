import Handbook from "./components/Handbook/Handbook";
import styles from "./our-adventages-section.module.css";

import ourAdventagesImg from "@/assets/imgs/sections/ourAdventages/our-adventages-img-1.jpg";

const OurAdventagesSection = () => {
  return (
    <div className={styles["our-adventages-section"]}>
      <img 
        src={ourAdventagesImg}
        className={styles["our-adventages-section-img"]}
      />
      <Handbook />
    </div>
  )
};

export default OurAdventagesSection;