import Filters from "@/components/Filters/Filters";
import styles from "./cars-page.module.css";
import { useEffect, useMemo, useState } from "react";
import { useCarStore } from "@/store/car.store";
import CarCard from "@/components/Cards/Car/CarCard";
import { useUserStore } from "@/store/user.store";
import CarDetailsModal from "@/components/Modals/CarDetails/CarDetails";
import { pipe } from "@/utils/functions";

const CarsPage = () => {
  const { currentUser } = useUserStore();
  const { getCars, cars, markCarAsFavorite } = useCarStore();

  const [carId, setCarId] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState({
    brand: "any_brand",
    bodyType: "any_type",
    fuel: "any_fuel",
    gearboxType: "Automatic",
    amountOfBooking: "oneToFive",
    rating: 1,
    minPrice: 0,
    maxPrice: 0,
  });

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

  const filteredAndSortedCars = useMemo(() => {
    const sortedCarsByFavorites = [...cars].sort((car) => {
      return car.isFavorite ? -1 : 1;
    });

    const carsPrices = cars.map((car) => car.pricePerHour);

    const defaultFiltersState = {
      brand: "any_brand",
      bodyType: "any_type",
      fuel: "any_fuel",
      gearboxType: "Automatic",
      amountOfBooking: "oneToFive",
      rating: 1,
      minPrice: Math.min(...carsPrices) || 0,
      maxPrice: Math.max(...carsPrices) || 0,
    };

    const isDefaultFiltersState = Object.values(filters).every((value) => {
      return Object.values(defaultFiltersState).includes(value);
    });

    const {
      filterByBrand,
      filterByType,
      filterByFuel,
      filterByGearboxType,
      filterByRating,
      filterByPrice,
    } = {
      filterByBrand: (arr) =>
        arr.filter((item) => {
          const filterByBrand = filters.brand === item.brand;

          return filters.brand === "any_brand" ? true : filterByBrand;
        }),
      filterByType: (arr) =>
        arr.filter((item) => {
          const filterByType = filters.bodyType === item.type;

          return filters.bodyType === "any_type" ? true : filterByType;
        }),
      filterByFuel: (arr) =>
        arr.filter((car) => {
          const filterByFuel = filters.fuel === car.fuel;

          return filters.fuel === "any_fuel" ? true : filterByFuel;
        }),
      filterByGearboxType: (arr) =>
        arr.filter((item) => {
          const filterByGearboxType = filters.gearboxType === item.gearboxType;

          return filterByGearboxType;
        }),
      filterByRating: (arr) =>
        arr.filter((item) => {
          const filterByRating = filters.rating === item.maxRating;

          return filterByRating;
        }),
      filterByPrice: (arr) =>
        arr.filter((item) => {
          const filterByPrice =
            filters.minPrice <= item.pricePerHour &&
            filters.maxPrice >= item.pricePerHour;

          return filterByPrice;
        }),
    };

    const filteredCars = pipe(
      filterByBrand,
      filterByType,
      filterByFuel,
      filterByGearboxType,
      filterByRating,
      filterByPrice
    )(sortedCarsByFavorites);

    return isDefaultFiltersState ? sortedCarsByFavorites : filteredCars;
  }, [cars, filters]);

  const handleFiltersChange = (values) => {
    Object.keys(values).forEach((key) => {
      setFilters((prev) => ({
        ...prev,
        [key]: [null, undefined].includes(values[key]) ? 1 : values[key],
      }));
    });
  };

  return (
    <div className={styles["cars-page"]}>
      <Filters onFiltersChange={handleFiltersChange} />
      {!cars.length || !filteredAndSortedCars.length ? (
        <span className={styles["cars-page-empty"]}>
          We don't have any cars now!
        </span>
      ) : (
        <div className={styles["cars-page-grid"]}>
          {filteredAndSortedCars.map((car) => {
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
