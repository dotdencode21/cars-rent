import { useEffect, useMemo, useState } from "react";
import BaseInput from "../Inputs/BaseInput/BaseInput";
import { Select } from "../Select/Select";
import styles from "./filters.module.css";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { FaStar } from "react-icons/fa6";
import BaseButton from "../Buttons/BaseButton/BaseButton";
import { useCarStore } from "@/store/car.store";
import { useSearchParams } from "react-router-dom";

const Filters = ({ onFiltersChange }) => {
  const { getCars, cars } = useCarStore();

  const [query] = useSearchParams();

  const [rating, setRating] = useState({
    onClickValue: null,
    onHoverValue: null,
  });
  const [filtersOptions, setFiltersOptions] = useState({
    brands: [],
    types: [],
    fuels: [],
    prices: [],
  });
  const [filters, setFilters] = useState({
    brand: query.get("brand") ? query.get("brand") : "any_brand",
    bodyType: query.get("type") ? query.get("type") : "any_type",
    fuel: "any_fuel",
    gearboxType: "Automatic",
    amountOfBooking: "oneToFive",
  });
  const [isRevokeFilters, setIsRevokeFilters] = useState(false);

  useEffect(() => {
    const getCarsData = () => {
      getCars().then((data) => {
        setFiltersOptions({
          brands: [
            {
              id: Date.now() * Math.random(),
              name: "brand",
              title: "Introduction form any brand option",
              value: "any_brand",
              default: true,
            },
            ...[...new Set(data.map((car) => car.brand))].map((brand) => ({
              id: Date.now() * Math.random(),
              name: "brand",
              title: brand,
              value: brand,
              default: false,
            })),
          ],
          types: [
            {
              id: Date.now() * Math.random(),
              name: "bodyType",
              title: "Introduction form any type option",
              value: "any_type",
              default: true,
            },
            ...[...new Set(data.map((car) => car.type))].map((type) => ({
              id: Date.now() * Math.random(),
              name: "bodyType",
              title: type,
              value: type,
              default: false,
            })),
          ],
          fuels: [
            {
              id: Date.now() * Math.random(),
              name: "fuel",
              title: "Any fuel",
              value: "any_fuel",
              default: true,
            },
            ...[...new Set(data.map((car) => car.fuel))].map(
              (fuel, fuelIndex) => ({
                id: Date.now() * Math.random(),
                name: "fuel",
                title: fuel,
                value: fuel,
                default: fuelIndex === 0,
              })
            ),
          ],
          prices: data.map((car) => car.pricePerHour),
        });
      });
    };

    if (isRevokeFilters) {
      getCarsData();
    }

    getCarsData();
  }, [isRevokeFilters]);

  const minPrice = useMemo(
    () =>
      filtersOptions.prices.length ? Math.min(...filtersOptions.prices) : 0,
    [filtersOptions.prices]
  );
  const maxPrice = useMemo(
    () =>
      filtersOptions.prices.length ? Math.max(...filtersOptions.prices) : 0,
    [filtersOptions.prices]
  );
  const [price, setPrice] = useState([0, 0]);

  useEffect(() => {
    setPrice([minPrice, maxPrice]);
  }, [minPrice, maxPrice]);

  useEffect(() => {
    onFiltersChange({
      brand: filters.brand,
      bodyType: filters.bodyType,
      fuel: filters.fuel,
      gearboxType: filters.gearboxType,
      amountOfBooking: filters.amountOfBooking,
      rating: rating.onClickValue,
      minPrice: price[0],
      maxPrice: price[1],
    });
  }, [rating.onClickValue, filters, price]);

  const handleChange = (values) => setPrice(values);

  const handlePriceChange = ({ target: { value } }, type) => {
    return type === "min"
      ? setPrice((prev) => [+value, prev[1]])
      : setPrice((prev) => [prev[0], +value]);
  };

  const handleKeyDown = (e) => {
    if (/[^0-9]/g.test(e.key) && e.key !== "Backspace") {
      e.preventDefault();
    }
  };

  const handleResetFilters = () => {
    setFiltersOptions({ brands: [], types: [], fuels: [], prices: [] });
    setIsRevokeFilters((prev) => !prev);
    setFilters({
      brand: "any_brand",
      bodyType: "any_type",
      fuel: "any_fuel",
      gearboxType: "Automatic",
      amountOfBooking: "oneToFive",
      isBooked: false,
    });
    setRating({
      onClickValue: null,
      onHoverValue: null,
    });
    setPrice([minPrice, maxPrice]);
  };

  const filtersOptionsLength = useMemo(() => {
    return (
      filtersOptions.brands.length &&
      filtersOptions.types.length &&
      filtersOptions.fuels.length &&
      filtersOptions.prices.length
    );
  }, [
    filtersOptions.brands,
    filtersOptions.types,
    filtersOptions.fuels,
    filtersOptions.prices,
  ]);

  return (
    <div className={styles["filters"]}>
      <div className={styles["filters-heading"]}>
        <span className={styles["filters-heading-title"]}>Filters</span>
      </div>
      {!cars.length || !filtersOptionsLength ? (
        <span className={styles["filters-loading"]}>Loading...</span>
      ) : (
        <>
          <div className={styles["filters-item"]}>
            <span className={styles["filters-item-title"]}>Brand</span>
            <Select
              name="brand"
              onClick={({ value }) =>
                setFilters((prev) => ({ ...prev, brand: value }))
              }
              options={filtersOptions.brands}
            />
          </div>
          <div className={styles["filters-item"]}>
            <span className={styles["filters-item-title"]}>Body type</span>
            <Select
              name="bodyType"
              onClick={({ value }) =>
                setFilters((prev) => ({ ...prev, bodyType: value }))
              }
              options={filtersOptions.types}
            />
          </div>
          <div className={styles["filters-item"]}>
            <span className={styles["filters-item-title"]}>Fuel</span>
            <Select
              name="fuel"
              onClick={({ value }) =>
                setFilters((prev) => ({ ...prev, fuel: value }))
              }
              options={filtersOptions.fuels}
            />
          </div>
          <div className={styles["filters-item"]}>
            <span className={styles["filters-item-title"]}>Gearbox</span>
            <div className={styles["filters-item-gearboxes"]}>
              <label className={styles["filters-item-gearboxes-item"]}>
                <input
                  type="radio"
                  value="Automatic"
                  onChange={(e) =>
                    setFilters((prev) => ({
                      ...prev,
                      gearboxType: e.target.value,
                    }))
                  }
                  checked={filters.gearboxType === "Automatic"}
                />
                Automatic
              </label>
              <label className={styles["filters-item-gearboxes-item"]}>
                <input
                  type="radio"
                  value="Mechanics"
                  onChange={(e) =>
                    setFilters((prev) => ({
                      ...prev,
                      gearboxType: e.target.value,
                    }))
                  }
                  checked={filters.gearboxType === "Mechanics"}
                />
                Mechanics
              </label>
            </div>
          </div>
          <div className={styles["filters-item-price"]}>
            <div className={styles["filters-item-price-heading"]}>
              <span className={styles["filters-item-title"]}>Price</span>
              <div className={styles["filters-item-price-heading-actions"]}>
                <div
                  className={styles["filters-item-price-heading-actions-min"]}
                >
                  <span
                    className={
                      styles["filters-item-price-heading-actions-min-label"]
                    }
                  >
                    min.
                  </span>
                  <BaseInput
                    value={price[0]}
                    onChange={(e) => handlePriceChange(e, "min")}
                    onKeyDown={handleKeyDown}
                    className={
                      styles["filters-item-price-heading-actions-min-input"]
                    }
                  />
                </div>
                <div
                  className={styles["filters-item-price-heading-actions-max"]}
                >
                  <span
                    className={
                      styles["filters-item-price-heading-actions-max-label"]
                    }
                  >
                    max.
                  </span>
                  <BaseInput
                    value={price[1]}
                    onChange={(e) => handlePriceChange(e, "max")}
                    onKeyDown={handleKeyDown}
                    className={
                      styles["filters-item-price-heading-actions-max-input"]
                    }
                  />
                </div>
              </div>
            </div>
            <Slider
              range
              value={price}
              min={minPrice}
              max={maxPrice}
              onChange={handleChange}
              styles={{
                rail: {
                  backgroundColor: "var(--primary-grey-color)",
                },
                track: {
                  backgroundColor: "var(--primary-blue-color)",
                },
                handle: {
                  backgroundColor: "var(--primary-blue-color)",
                  border: "0.125rem solid var(--primary-white-color)",
                  opacity: 1,
                  width: "1rem",
                  height: "1rem",
                  boxShadow: "none",
                },
              }}
            />
          </div>
          <div className={styles["filters-item"]}>
            <span className={styles["filters-item-title"]}>Rating</span>
            <div className={styles["filters-item-rating"]}>
              {[1, 2, 3, 4, 5].map((_, ratingIndex) => {
                return (
                  <FaStar
                    key={ratingIndex}
                    size="2rem"
                    style={{
                      padding: "0 0.25rem",
                      cursor: "pointer",
                      color:
                        rating.onClickValue <= ratingIndex &&
                        rating.onHoverValue <= ratingIndex
                          ? "var(--primary-grey-color)"
                          : "var(--primary-black-color)",
                    }}
                    onClick={() =>
                      setRating((prev) => ({
                        ...prev,
                        onClickValue: ratingIndex + 1,
                      }))
                    }
                    onMouseMove={() =>
                      setRating((prev) => ({
                        ...prev,
                        onHoverValue: ratingIndex + 1,
                      }))
                    }
                    onMouseOut={() =>
                      setRating((prev) => ({ ...prev, onHoverValue: null }))
                    }
                  />
                );
              })}
            </div>
          </div>
          <div className={styles["filters-item"]}>
            <span className={styles["filters-item-title"]}>Booking count</span>
            <div className={styles["filters-item-booking-actions"]}>
              <label className={styles["filters-item-booking-actions-item"]}>
                <input
                  type="radio"
                  value="oneToFive"
                  onChange={(e) =>
                    setFilters((prev) => ({
                      ...prev,
                      amountOfBooking: e.target.value,
                    }))
                  }
                  checked={filters.amountOfBooking === "oneToFive"}
                />
                1..5
              </label>
              <label className={styles["filters-item-booking-actions-item"]}>
                <input
                  type="radio"
                  value="fiveToTen"
                  onChange={(e) =>
                    setFilters((prev) => ({
                      ...prev,
                      amountOfBooking: e.target.value,
                    }))
                  }
                  checked={filters.amountOfBooking === "fiveToTen"}
                />
                5..10
              </label>
              <label className={styles["filters-item-booking-actions-item"]}>
                <input
                  type="radio"
                  value="moreThanTen"
                  onChange={(e) =>
                    setFilters((prev) => ({
                      ...prev,
                      amountOfBooking: e.target.value,
                    }))
                  }
                  checked={filters.amountOfBooking === "moreThanTen"}
                />
                10+
              </label>
            </div>
          </div>
          <div className={styles["filters-item-actions"]}>
            <BaseButton
              className={styles["filters-item-actions-reset-btn"]}
              onClick={handleResetFilters}
              label="Reset filters"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Filters;
