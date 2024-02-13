import { useTranslation } from "react-i18next";

import { motion } from "framer-motion";

import styles from "./first-class-rental.module.css";
import { carsData } from "@/mock/cars.data";
import CarCard from "@/components/Cards/Car/CarCard";
import { useState } from "react";

const FirstClassRentalSection = () => {
  const [cars, setCars] = useState(() => carsData);

  const { t } = useTranslation();

  const variants = {
    hidden: {
      opacity: 0,
      y: 125,
      transition: {
        duration: 0.75
      }
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        type: "spring",
        bounce: 0.5,
        duration: 1.25
      }
    }
  }

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
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2, once: true }}
        variants={variants}
        className={styles["first-class-rental-section-cards"]}
      >
        {
          cars.map(car => {
            return (
              <CarCard 
                key={car.id}
                {...car}
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