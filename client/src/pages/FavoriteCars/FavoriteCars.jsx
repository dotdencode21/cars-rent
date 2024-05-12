import { useUserStore } from "@/store/user.store";
import styles from "./favorite-cars-page.module.css";
import { useEffect, useMemo, useState } from "react";
import CarCard from "@/components/Cards/Car/CarCard";
import { useCarStore } from "@/store/car.store";

const FavoriteCarsPage = () => {
  const { currentUser, getUserById } = useUserStore();
  const { getCarById, markCarAsFavorite } = useCarStore();

  const [cars, setCars] = useState([]);

  const favoriteCars = useMemo(() => {
    return currentUser?.favoriteCars || [];
  }, [currentUser]);

  useEffect(() => {
    getUserById(JSON.parse(localStorage.getItem("currentUserId")));
  }, []);

  useEffect(() => {
    Promise.all(
      favoriteCars.map(async (favoriteCar) => {
        return await getCarById(favoriteCar.carId);
      })
    ).then((data) => {
      setCars(data);
    });
  }, [favoriteCars]);

  const handleMarkAsFavorite = async ({ carId, isFavorite }) => {
    await markCarAsFavorite({
      userId: currentUser?.id,
      carId,
      isFavorite: false,
    }).then(() =>
      getUserById(JSON.parse(localStorage.getItem("currentUserId")))
    );
  };

  return (
    <div className={styles["favorite-cars-page"]}>
      <div className={styles["favorite-cars-page-amount"]}>
        <span className={styles["favorite-cars-page-amount-label"]}>
          You have {cars.length} favorite cars
        </span>
      </div>
      {!cars.length ? (
        <div className={styles["favorite-cars-page-empty"]}>
          <span className={styles["favorite-cars-page-empty-label"]}>
            You don't have any favorite cars!
          </span>
        </div>
      ) : (
        <div className={styles["favorite-cars-page-list"]}>
          {cars.map((favoriteCar) => {
            return (
              <CarCard
                key={favoriteCar.id}
                {...favoriteCar}
                onClick={() => {}}
                onMarkAsFavorite={handleMarkAsFavorite}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default FavoriteCarsPage;
