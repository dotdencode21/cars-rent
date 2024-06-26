import { useUserStore } from "@/store/user.store";
import styles from "./booked-cars.module.css";
import cn from "classnames";
import { useEffect, useState } from "react";
import { useCarStore } from "@/store/car.store";
import dayjs from "dayjs";
import BaseButton from "@/components/Buttons/BaseButton/BaseButton";
import { useBookStore } from "@/store/book.store";
import RatingModal from "@/components/Modals/Rating/Rating";
import { useRatingStore } from "@/store/rating.store";

const BookedCarsSection = () => {
  const { currentUser, getUserById } = useUserStore();
  const { currentCar, getCarById } = useCarStore();
  const { bookCarByUserIdAndCarId } = useBookStore();
  const { updateRatingByCarId } = useRatingStore();

  const [isOpen, setIsOpen] = useState(false);

  const isBookedCar =
    currentUser?.bookedCar && Object.keys(currentUser?.bookedCar).length;

  useEffect(() => {
    getUserById(
      currentUser?.id || JSON.parse(localStorage.getItem("currentUserId"))
    );
  }, []);

  useEffect(() => {
    if (isBookedCar) getCarById(currentUser?.bookedCar.carId);
  }, [isBookedCar]);

  const handleEndRental = () => {
    bookCarByUserIdAndCarId(
      currentUser?.id,
      currentUser?.bookedCar?.carId || currentCar?.id,
      {
        isBooking: false,
      }
    ).then(() => {
      getUserById(currentUser?.id);
      setIsOpen(false);
    });
  };

  const handleRate = (rating) => {
    updateRatingByCarId(currentUser?.bookedCar?.carId || currentCar?.id, {
      rating,
    }).then(() => {
      handleEndRental();
    });
  };

  const handleClose = () => {
    handleEndRental();
  };

  return (
    <div
      className={cn({
        [styles["booked-cars"]]: true,
        [styles["booked-cars-without-content"]]: !isBookedCar,
      })}
    >
      {isBookedCar ? (
        <div className={styles["booked-cars-content"]}>
          <img
            src={
              currentCar?.img
                ? currentCar?.img
                : "https://archive.org/download/placeholder-image/placeholder-image.jpg"
            }
            className={styles["booked-cars-content-img"]}
          />
          <div className={styles["booked-cars-content-info"]}>
            <div className={styles["booked-cars-content-item"]}>
              <span className={styles["booked-cars-content-item-label"]}>
                Name:
              </span>
              <span className={styles["booked-cars-content-item-value"]}>
                {currentCar?.name}
              </span>
            </div>
            <div className={styles["booked-cars-content-item"]}>
              <span className={styles["booked-cars-content-item-label"]}>
                Brand:
              </span>
              <span className={styles["booked-cars-content-item-value"]}>
                {currentCar?.brand}
              </span>
            </div>
            <div className={styles["booked-cars-content-item"]}>
              <span className={styles["booked-cars-content-item-label"]}>
                Fuel:
              </span>
              <span className={styles["booked-cars-content-item-value"]}>
                {currentCar?.fuel}
              </span>
            </div>
            <div className={styles["booked-cars-content-item"]}>
              <span className={styles["booked-cars-content-item-label"]}>
                Gearbox type:
              </span>
              <span className={styles["booked-cars-content-item-value"]}>
                {currentCar?.gearboxType}
              </span>
            </div>
            <div className={styles["booked-cars-content-item"]}>
              <span className={styles["booked-cars-content-item-label"]}>
                Type:
              </span>
              <span className={styles["booked-cars-content-item-value"]}>
                {currentCar?.type}
              </span>
            </div>
            <div className={styles["booked-cars-content-item"]}>
              <span className={styles["booked-cars-content-item-label"]}>
                Rating:
              </span>
              <span className={styles["booked-cars-content-item-value"]}>
                {currentCar?.maxRating}
              </span>
            </div>
            <div className={styles["booked-cars-content-item"]}>
              <span className={styles["booked-cars-content-item-label"]}>
                Amount of booking:
              </span>
              <span className={styles["booked-cars-content-item-value"]}>
                {currentCar?.amountOfBooking}
              </span>
            </div>
            <div className={styles["booked-cars-content-item"]}>
              <span className={styles["booked-cars-content-item-label"]}>
                Price:
              </span>
              <span className={styles["booked-cars-content-item-value"]}>
                {currentCar?.pricePerHour}$
              </span>
            </div>
            <div className={styles["booked-cars-content-item"]}>
              <span className={styles["booked-cars-content-item-label"]}>
                Rent date:
              </span>
              <span className={styles["booked-cars-content-item-value"]}>
                {dayjs(currentUser?.bookedCar.rentStartDate).format(
                  "DD.MM.YYYY"
                )}{" "}
                -{" "}
                {dayjs(currentUser?.bookedCar.rentEndDate).format("DD.MM.YYYY")}{" "}
              </span>
            </div>
            <div className={styles["booked-cars-content-item"]}>
              <span className={styles["booked-cars-content-item-label"]}>
                Total price:
              </span>
              <span className={styles["booked-cars-content-item-value"]}>
                {currentUser?.bookedCar.totalPrice}$
              </span>
            </div>
          </div>
          <div className={styles["booked-cars-content-actions"]}>
            <BaseButton
              className={styles["booked-cars-content-actions-end-btn"]}
              onClick={() => setIsOpen(true)}
              label="End rental"
            />
          </div>
        </div>
      ) : (
        <span className={styles["booked-cars-without-content-title"]}>
          You don't have any booked cars now!
        </span>
      )}
      <RatingModal open={isOpen} onClose={handleClose} onRate={handleRate} />
    </div>
  );
};

export default BookedCarsSection;
