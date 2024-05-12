import { GoHeart, GoHeartFill } from "react-icons/go";
import { HiCurrencyDollar } from "react-icons/hi2";
import { FaStar } from "react-icons/fa6";

import styles from "./car-card.module.css";
import { useTranslation } from "react-i18next";
import { LuMousePointerClick } from "react-icons/lu";

import { CAR_TYPE } from "@/constants/cars";
import { useUserStore } from "@/store/user.store";
import { useMemo, useState } from "react";
import NotLoggedModal from "@/components/Modals/NotLogged/NotLogged";

import cn from "classnames";

const CarCard = ({
  id,
  img = "",
  name = "",
  type = "",
  selected = false,
  pricePerHour = 0,
  isFavorite = false,
  showFavoriteBtn = true,
  showDetailsBtn = true,
  rating = [1],
  onDoubleClick = () => {},
  onMarkAsFavorite = ({ carId, isFavorite }) => {},
  onClick,
}) => {
  const { t } = useTranslation();

  const { isLogged } = useUserStore();

  const [isOpen, setIsOpen] = useState(false);
  const [markAsFavorite, setMarkAsFavorite] = useState(isFavorite);

  const isAuth = isLogged && localStorage.getItem("currentUserId");

  const handleMarkAsFavorite = (e) => {
    e.stopPropagation();

    if (!isAuth) return setIsOpen(true);

    setMarkAsFavorite((prev) => {
      onMarkAsFavorite({ carId: id, isFavorite: !prev });
      return !prev;
    });
  };

  const carRating = useMemo(() => {
    return rating.reduce((accum, value) => accum + value, 0) / rating.length;
  }, [rating]);

  return (
    <div
      className={cn({
        [styles["car-card"]]: true,
        [styles["car-card_selected"]]: selected,
      })}
      onClick={() => onClick(id)}
      onDoubleClick={onDoubleClick}
    >
      <div
        style={{
          backgroundImage: `url(${
            img
              ? img
              : "https://archive.org/download/placeholder-image/placeholder-image.jpg"
          })`,
        }}
        className={styles["car-card-img"]}
      >
        <div className={styles["car-card-img-rating"]}>
          <span className={styles["car-card-img-rating-value"]}>
            {carRating}
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
            {t(CAR_TYPE[type]) ? t(CAR_TYPE[type]) : type}
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
            {showDetailsBtn && (
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
            )}
          </div>
          <button
            onClick={handleMarkAsFavorite}
            className={styles["car-card-content-details-favorite-btn"]}
          >
            {showFavoriteBtn && (
              <>
                {markAsFavorite ? (
                  <GoHeartFill
                    className={styles["car-card-content-details-icon"]}
                  />
                ) : (
                  <GoHeart
                    className={styles["car-card-content-details-icon"]}
                  />
                )}
              </>
            )}
          </button>
        </div>
      </div>
      <NotLoggedModal open={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export default CarCard;
