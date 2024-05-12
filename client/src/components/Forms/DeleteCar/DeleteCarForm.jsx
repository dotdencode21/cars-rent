import styles from "./delete-car-form.module.css";
import CarCard from "@/components/Cards/Car/CarCard";

const DeleteCarForm = ({ cars, onClick, onDoubleClick, carId }) => {
  console.log(carId);

  return (
    <div className={styles["delete-car-form"]}>
      {cars.map((car) => {
        return (
          <CarCard
            key={car.id}
            {...car}
            onClick={onClick}
            showFavoriteBtn={false}
            showDetailsBtn={false}
            onDoubleClick={onDoubleClick}
            selected={carId === car.id}
          />
        );
      })}
    </div>
  );
};

export default DeleteCarForm;
