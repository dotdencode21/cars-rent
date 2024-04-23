import Filters from "@/components/Filters/Filters";
import styles from "./cars-page.module.css";
import { useEffect } from "react";
import { useCarStore } from "@/store/car.store";
import CarCard from "@/components/Cards/Car/CarCard";

const CarsPage = () => {
  const { getCars, cars } = useCarStore();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    getCars();
  }, []);

  return (
    <div className={styles["cars-page"]}>
      <Filters />
      <div className={styles["cars-page-grid"]}>
        {cars.map((car) => {
          return <CarCard key={car.id} {...car} />;
        })}
      </div>
    </div>
  );
};

export default CarsPage;
