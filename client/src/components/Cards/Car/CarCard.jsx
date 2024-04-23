import { GoHeart, GoHeartFill } from "react-icons/go";
import { HiCurrencyDollar } from "react-icons/hi2";
import { FaStar } from "react-icons/fa6";

import styles from "./car-card.module.css";
import { useTranslation } from "react-i18next";
import { LuMousePointerClick } from "react-icons/lu";

import { CAR_TYPE } from "@/constants/cars";
import { useUserStore } from "@/store/user.store";
import { useState } from "react";
import NotLoggedModal from "@/components/Modals/NotLogged/NotLogged";

const CarCard = ({
  img = "",
  name = "",
  type = "",
  pricePerHour = 0,
  isFavorite = false,
  onClick,
}) => {
  const { t } = useTranslation();

  const { isLogged } = useUserStore();

  const [isOpen, setIsOpen] = useState(false);

  const isAuth = isLogged && localStorage.getItem("currentUserId");

  const handleMarkAsFavorite = () => {
    if (!isAuth) return setIsOpen(true);
  };

  return (
    <div className={styles["car-card"]} onClick={onClick}>
      <div
        style={{ backgroundImage: `url(${img})` }}
        className={styles["car-card-img"]}
      >
        <div className={styles["car-card-img-rating"]}>
          <span className={styles["car-card-img-rating-value"]}>
            {(1 + Math.random() * 4).toFixed(1)}
          </span>
          <FaStar color="var(--primary-black-color)" size="1.5rem" />
        </div>
      </div>
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
            <div className={styles["car-card-content-details-info-item"]}>
              <HiCurrencyDollar
                color="var(--primary-black-color)"
                size="1.5rem"
              />
              <span
                className={styles["car-card-content-details-info-item-title"]}
              >
                {pricePerHour}/{t("Card cars price postfix")}
              </span>
            </div>
            <div className={styles["car-card-content-details-info-item"]}>
              <LuMousePointerClick
                color="var(--primary-black-color)"
                size="1.5rem"
              />
              <span
                className={styles["car-card-content-details-info-item-title"]}
              >
                Show details
              </span>
            </div>
          </div>
          <button
            onClick={handleMarkAsFavorite}
            className={styles["car-card-content-details-favorite-btn"]}
          >
            {isFavorite ? (
              <GoHeartFill
                className={styles["car-card-content-details-icon"]}
              />
            ) : (
              <GoHeart className={styles["car-card-content-details-icon"]} />
            )}
          </button>
        </div>
      </div>
      <NotLoggedModal open={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export default CarCard;
