import Filters from "@/components/Filters/Filters";
import styles from "./cars-page.module.css";
import { useEffect, useMemo, useState } from "react";
import { useCarStore } from "@/store/car.store";
import CarCard from "@/components/Cards/Car/CarCard";
import { useUserStore } from "@/store/user.store";
import CarDetailsModal from "@/components/Modals/CarDetails/CarDetails";

const CarsPage = () => {
  const { currentUser } = useUserStore();
  const { getCars, cars, markCarAsFavorite } = useCarStore();

  const [carId, setCarId] = useState("");
  const [isOpen, setIsOpen] = useState(false);

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

  const handleGetCarId = (carId) => {
    setCarId(carId);
    setIsOpen(true);
  };

  const sortedCarsByIsFavoriteField = useMemo(() => {
    return [...cars].sort((a) => (a.isFavorite ? -1 : 1));
  }, [cars]);

  return (
    <div className={styles["cars-page"]}>
      <Filters />
      {!cars.length ? (
        <span className={styles["cars-page-empty"]}>
          We don't have any cars now!
        </span>
      ) : (
        <div className={styles["cars-page-grid"]}>
          {sortedCarsByIsFavoriteField.map((car) => {
            return (
              <CarCard
                key={car.id}
                {...car}
                onMarkAsFavorite={handleMarkAsFavorite}
                onClick={handleGetCarId}
              />
            );
          })}
        </div>
      )}
      <CarDetailsModal
        carId={carId}
        open={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
};

export default CarsPage;
