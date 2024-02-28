import animationData from "@/mock/animations/highwayWithCars.json";

import styles from "./highway-with-cars.module.css";

import Lottie from "react-lottie";

const HighwayWithCars = () => {
  const options = {
    loop: true,
    autoplay: true,
    animationData,
  };

  return (
    <div className={styles["highway-with-cars"]}>
      <Lottie
        options={options}
        width={162}
        isClickToPauseDisabled
      />
    </div>
  );
};
  
export default HighwayWithCars;