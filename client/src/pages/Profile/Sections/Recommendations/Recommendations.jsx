import { useRecommendationStore } from "@/store/recommendation.store";
import styles from "./recommendations.module.css";
import cn from "classnames";
import { useEffect, useMemo, useState } from "react";
import { useUserStore } from "@/store/user.store";
import CarCard from "@/components/Cards/Car/CarCard";
import CarDetailsModal from "@/components/Modals/CarDetails/CarDetails";
import { useCarStore } from "@/store/car.store";

const RecommendationsSection = () => {
  const { getAssociations, recommendations } = useRecommendationStore();
  const { currentUser, getUserById } = useUserStore();
  const { getCarById, markCarAsFavorite } = useCarStore();

  const [carId, setCarId] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [currentCar, setCurrentCar] = useState(null);

  useEffect(() => {
    getUserById(
      currentUser?.id || JSON.parse(localStorage.getItem("currentUserId"))
    );
  }, []);

  const isBookedCar =
    currentUser?.bookedCar && Object.keys(currentUser?.bookedCar).length;

  useEffect(() => {
    if (isBookedCar)
      getCarById(currentUser?.bookedCar?.carId).then((car) =>
        setCurrentCar(car)
      );
  }, [isBookedCar]);

  useEffect(() => {
    getAssociations(currentUser?.locationType || "");

    return () => {
      setCarId("");
      setCurrentCar(null);
    };
  }, []);

  const handleGetCarId = (carId) => {
    setCarId(carId);
    setIsOpen(true);
  };

  const filteredRecommendations = useMemo(() => {
    return recommendations
      .filter(
        (recommendation) =>
          recommendation.name !== currentCar?.name ||
          recommendation.type !== currentCar?.type ||
          recommendation.brand !== currentCar?.brand
      )
      .sort((car) => (car.isFavorite ? -1 : 1));
  }, [recommendations, currentCar]);

  const handleMarkAsFavorite = async ({ carId, isFavorite }) => {
    await markCarAsFavorite({
      userId: currentUser?.id,
      carId,
      isFavorite,
    }).then(() => getAssociations(currentUser?.locationType || ""));
  };

  const handleClose = () => {
    setIsOpen(false);
    setCurrentCar(null);
  };

  return (
    <div
      className={cn({
        [styles["recommendations"]]: true,
        [styles["recommendations-without-content"]]:
          !filteredRecommendations.length,
      })}
    >
      {filteredRecommendations.length ? (
        <div className={styles["recommendations-content"]}>
          <span className={styles["recommendations-content-title"]}>
            Based on your location, we have selected cars that you might like ✌️
          </span>
          <div className={styles["recommendations-content-grid"]}>
            {filteredRecommendations.map((recommendation) => {
              return (
                <CarCard
                  key={recommendation.id}
                  {...recommendation}
                  onClick={handleGetCarId}
                  onMarkAsFavorite={handleMarkAsFavorite}
                />
              );
            })}
          </div>
        </div>
      ) : (
        <span className={styles["recommendations-without-content-title"]}>
          We don't have any recommendations for you now!
        </span>
      )}
      <CarDetailsModal carId={carId} open={isOpen} onClose={handleClose} />
    </div>
  );
};

export default RecommendationsSection;
