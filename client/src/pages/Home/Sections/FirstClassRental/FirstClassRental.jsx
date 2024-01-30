import { useTranslation } from "react-i18next";

import { motion } from "framer-motion";

import styles from "./first-class-rental.module.css";
import { carsData } from "@/mock/cars.data";
import Card from "@/components/Card/Card";
import { useState } from "react";

const FirstClassRentalSection = () => {
  const [cars, setCars] = useState(() => carsData);

  const { t } = useTranslation();

  const handleMarkAsFavorite = (carId) => {
    return setCars(prev => prev.map(car => {
      return car.id === carId ? { ...car, isFavorite: !car.isFavorite } : car;
    }));
  };

  return (
    <div className={styles["first-class-rental-section"]}>
      <span className={styles["first-class-rental-section-title"]}>
        {t("First class rental section title")}
      </span>
      <motion.div
        className={styles["first-class-rental-section-cards"]}
      >
        {
          cars.map(car => {
            return (
              <Card 
                key={car.id}
                carId={car.id}
                imgSrc={car.imgSrc}
                name={car.name}
                type={car.type}
                price={car.price}
                brand={car.brand}
                fuel={car.fuel}
                isFavorite={car.isFavorite}
                onClick={handleMarkAsFavorite}
              />
            )
          })
        }
      </motion.div>
    </div>
  )
};

export default FirstClassRentalSection;