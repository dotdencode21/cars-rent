import styles from "./update-car-form-one.module.css";
import CarCard from "@/components/Cards/Car/CarCard";

const UpdateCarFormOne = ({ cars, onClick }) => {
  return (
    <div className={styles["update-car-form-one"]}>
      {cars.map((car) => {
        return (
          <CarCard
            key={car.id}
            {...car}
            onClick={onClick}
            showFavoriteBtn={false}
            showDetailsBtn={false}
          />
        );
      })}
    </div>
  );
};

export default UpdateCarFormOne;
