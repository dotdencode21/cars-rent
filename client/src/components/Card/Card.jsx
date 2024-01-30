import { GoHeart, GoHeartFill } from "react-icons/go";
import { FaCar } from "react-icons/fa";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { HiCurrencyDollar } from "react-icons/hi2";

import styles from "./card.module.css";
import { useTranslation } from "react-i18next";

import { CAR_FUEL_TYPE, CAR_TYPE } from "@/constants/cars";

const Card = ({
  carId = null,
  imgSrc = "", 
  name = "", 
  type = "", 
  price = 0, 
  brand = "", 
  fuel = "",
  isFavorite = false,
  onClick
}) => {
  const { t } = useTranslation();

  const handleMarkAsFavorite = (e) => {
    e.stopPropagation();
    return onClick(carId);
  }

  return (
    <div className={styles["card"]}>
      <img 
        src={imgSrc}
        className={styles["card-img"]} 
      />
      <div className={styles["card-content"]}>
        <div className={styles["card-content-heading"]}>
          <span className={styles["card-content-heading-name"]}>
            {name}
          </span>
          <span className={styles["card-content-heading-delimeter"]}>•</span>
          <span className={styles["card-content-heading-type"]}>
            {t(CAR_TYPE[type])}
          </span>
        </div>
        <div className={styles["card-content-details"]}>
          <div className={styles["card-content-details-info"]}>
            <div className={styles["card-content-details-info-price"]}>
              <HiCurrencyDollar className={styles["card-content-details-info-price-icon"]} />
              <span className={styles["card-content-details-info-price-title"]}>
                {price}/{t("Card cars price postfix")}
              </span>
            </div>
            <div className={styles["card-content-details-info-brand"]}>
              <FaCar className={styles["card-content-details-info-brand-icon"]} />
              <span className={styles["card-content-details-info-brand-title"]}>
                {brand}
              </span>
            </div>
            <div className={styles["card-content-details-info-fuel"]}>
              <BsFillFuelPumpFill className={styles["card-content-details-info-fuel-icon"]} />
              <span className={styles["card-content-details-info-fuel-title"]}>
                {t(CAR_FUEL_TYPE[fuel])}
              </span>
            </div>
          </div>
          <button
            onClick={handleMarkAsFavorite}
            className={styles["card-content-details-favorite-btn"]}
          >
            {
              isFavorite ? <GoHeartFill className={styles["card-content-details-icon"]} /> : <GoHeart className={styles["card-content-details-icon"]} />
            }
          </button>
        </div>
      </div>
    </div>
  )
};

export default Card;