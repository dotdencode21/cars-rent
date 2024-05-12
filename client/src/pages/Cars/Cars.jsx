import Filters from "@/components/Filters/Filters";
import styles from "./cars-page.module.css";
import { useEffect, useMemo } from "react";
import { useCarStore } from "@/store/car.store";
import CarCard from "@/components/Cards/Car/CarCard";
import { useUserStore } from "@/store/user.store";

const CarsPage = () => {
  const { currentUser } = useUserStore();
  const { getCars, cars, markCarAsFavorite } = useCarStore();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    getCars();
  }, []);

  const handleMarkAsFavorite = async ({ carId, isFavorite }) => {
    await markCarAsFavorite({
      userId: currentUser?.id,
      carId,
      isFavorite,
    }).then(() => getCars());
  };

  const sortedCarsByIsFavoriteField = useMemo(() => {
    return [...cars].sort((a) => (a.isFavorite ? -1 : 1));
  }, [cars]);

  return (
    <div className={styles["cars-page"]}>
      <Filters />
      <div className={styles["cars-page-grid"]}>
        {sortedCarsByIsFavoriteField.map((car) => {
          return (
            <CarCard
              key={car.id}
              {...car}
              onMarkAsFavorite={handleMarkAsFavorite}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CarsPage;
