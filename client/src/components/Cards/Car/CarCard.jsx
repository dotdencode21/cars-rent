import { GoHeart, GoHeartFill } from "react-icons/go";
import { FaCar } from "react-icons/fa";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { HiCurrencyDollar } from "react-icons/hi2";

import styles from "./car-card.module.css";
import { useTranslation } from "react-i18next";

import { CAR_FUEL_TYPE, CAR_TYPE } from "@/constants/cars";

const CarCard = ({
  id = null,
  imgSrc = "", 
  name = "", 
  type = "", 
  price = 0, 
  brand = "", 
  fuel = "",
  isFavorite = false,
  hasHover = true,
  onClick
}) => {
  const { t } = useTranslation();

  const handleMarkAsFavorite = (e) => {
    e.stopPropagation();
    return onClick(id);
  }

  return (
    <div className={
      hasHover ? styles["car-card-hover"] : styles["car-card"]
    }>
      <img 
        src={imgSrc}
        className={styles["car-card-img"]} 
      />
      <div className={styles["car-card-content"]}>
        <div className={styles["car-card-content-heading"]}>
          <span className={styles["car-card-content-heading-name"]}>
            {name}
          </span>
          <span className={styles["car-card-content-heading-type"]}>
            {t(CAR_TYPE[type])}
          </span>
        </div>
        <div className={styles["car-card-content-details"]}>
          <div className={styles["car-card-content-details-info"]}>
            <div className={styles["car-card-content-details-info-price"]}>
              <HiCurrencyDollar className={styles["car-card-content-details-info-price-icon"]} />
              <span className={styles["car-card-content-details-info-price-title"]}>
                {price}/{t("Card cars price postfix")}
              </span>
            </div>
            <div className={styles["car-card-content-details-info-brand"]}>
              <FaCar className={styles["car-card-content-details-info-brand-icon"]} />
              <span className={styles["car-card-content-details-info-brand-title"]}>
                {brand}
              </span>
            </div>
            <div className={styles["car-card-content-details-info-fuel"]}>
              <BsFillFuelPumpFill className={styles["car-card-content-details-info-fuel-icon"]} />
              <span className={styles["car-card-content-details-info-fuel-title"]}>
                {t(CAR_FUEL_TYPE[fuel])}
              </span>
            </div>
          </div>
          <button
            onClick={handleMarkAsFavorite}
            className={styles["car-card-content-details-favorite-btn"]}
          >
            {
              isFavorite ? <GoHeartFill className={styles["car-card-content-details-icon"]} /> : <GoHeart className={styles["car-card-content-details-icon"]} />
            }
          </button>
        </div>
      </div>
    </div>
  )
};

export default CarCard;