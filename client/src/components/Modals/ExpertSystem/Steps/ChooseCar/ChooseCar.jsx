import BaseButton from "@/components/Buttons/BaseButton/BaseButton";
import { IoCloseOutline } from "react-icons/io5";

import styles from "./choose-car.module.css";
import CarCard from "@/components/Cards/Car/CarCard";

const ChooseCarStep = ({ cars, onClose, onCarChoose }) => {
  return (
    <div className={styles["choose-car-modal-content"]}>
      <div className={styles["choose-car-modal-content-header"]}>
        <span className={styles["choose-car-modal-content-header-title"]}>
          Choose a car
        </span>
        <BaseButton
          label={
            <IoCloseOutline size="1.75rem" color="var(--primary-black-color" />
          }
          style={{
            backgroundColor: "transparent",
            padding: 0,
          }}
          onClick={onClose}
        />
      </div>
      <div className={styles["choose-car-modal-content-grid"]}>
        {cars.map((car) => {
          return (
            <div
              key={car.id}
              onClick={() => onCarChoose(cars.find((car) => car.id === car.id))}
            >
              <CarCard hasHover={false} {...car} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChooseCarStep;
