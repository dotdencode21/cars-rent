import styles from "./booked-cars.module.css";
import cn from "classnames";

const BookedCarsSection = () => {
  return (
    <div
      className={cn({
        [styles["booked-cars"]]: true,
        [styles["booked-cars-without-content"]]: true,
      })}
    >
      {false ? (
        <span>Has booked cars</span>
      ) : (
        <span className={styles["booked-cars-without-content-title"]}>
          You don't have any booked cars now!
        </span>
      )}
    </div>
  );
};

export default BookedCarsSection;
