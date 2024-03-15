import Banner from "@/components/Banner/Banner";
import styles from "./rules.module.css";
import { SlQuestion } from "react-icons/sl";
import { useState } from "react";
import BaseButton from "@/components/Buttons/BaseButton/BaseButton";
import { IoCloseOutline } from "react-icons/io5";
import CarCard from "@/components/Cards/Car/CarCard";
import { carsData } from "@/mock/cars.data";
import ExpertSystemModal from "@/components/Modals/ExpertSystem/ExpertSystem";

const RulesPage = () => {
  const [isShow, setIsShow] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const mercedesBenzCar = carsData.find((car) => car.name === "Mercedes-Benz");

  return (
    <div className={styles["rules-page"]}>
      <Banner
        show={isShow}
        icon={<SlQuestion size="1.75rem" color="var(--primary-green-color)" />}
        title="Our questions will help you easily determine which type your car is suitable for"
      >
        <BaseButton
          label="Try it!"
          style={{
            backgroundColor: "var(--primary-green-color)",
          }}
          onClick={() => setIsOpen(true)}
        />
        <BaseButton
          label={
            <IoCloseOutline size="1.75rem" color="var(--primary-green-color)" />
          }
          style={{
            backgroundColor: "transparent",
            padding: 0,
          }}
          onClick={() => setIsShow(false)}
        />
      </Banner>
      <div className={styles["rules-page-grid"]}>
        <CarCard
          hasHover={false}
          {...{ ...mercedesBenzCar, isFavorite: true }}
        />
      </div>
      <ExpertSystemModal
        open={isOpen}
        cars={[{ ...{ ...mercedesBenzCar, isFavorite: true } }]}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
};

export default RulesPage;
