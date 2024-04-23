import { useState } from "react";
import BaseInput from "../Inputs/BaseInput/BaseInput";
import { Select } from "../Select/Select";
import styles from "./filters.module.css";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { FaStar } from "react-icons/fa6";
import BaseButton from "../Buttons/BaseButton/BaseButton";
import { useCarStore } from "@/store/car.store";

const Filters = () => {
  const { getCars } = useCarStore();

  const [price, setPrice] = useState([100, 8500]);
  const [rating, setRating] = useState({
    onClickValue: null,
    onHoverValue: null,
  });
  const [filters, setFilters] = useState({
    brand: "",
    bodyType: "",
    fuel: "Gazoline",
    gearboxType: "Automatic",
    amountOfBooking: "oneToFive",
    isBooked: false,
  });

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
    setFilters({
      brand: "",
      bodyType: "",
      fuel: "Gazoline",
      gearboxType: "Automatic",
      amountOfBooking: "oneToFive",
      isBooked: false,
    });
    setRating({
      onClickValue: null,
      onHoverValue: null,
    });
    setPrice([100, 8500]);
  };

  const handleApplyFilters = () => {
    const extendedFilters = {
      ...filters,
      minPrice: price[0],
      maxPrice: price[1],
      rating: rating.onClickValue,
    };

    const queryParams = Object.keys(extendedFilters)
      .map((key) => {
        const value = extendedFilters[key];
        if (value !== null && value !== undefined && value !== "") {
          return encodeURIComponent(key) + "=" + encodeURIComponent(value);
        }
        return null;
      })
      .filter((param) => param !== null)
      .join("&");

    getCars(queryParams);
  };

  return (
    <div className={styles["filters"]}>
      <div className={styles["filters-heading"]}>
        <span className={styles["filters-heading-title"]}>Filters</span>
      </div>
      <div className={styles["filters-item"]}>
        <span className={styles["filters-item-title"]}>Brand</span>
        <Select
          name="brand"
          onClick={({ value }) =>
            setFilters((prev) => ({ ...prev, brand: value }))
          }
          options={[
            {
              id: 1,
              name: "brand",
              title: "Introduction form any brand option",
              value: "any_brand",
              default: true,
            },
            {
              id: 2,
              name: "brand",
              title: "Ford",
              value: "Ford",
              default: false,
            },
            {
              id: 3,
              name: "brand",
              title: "Toyota",
              value: "Toyota",
              default: false,
            },
            {
              id: 4,
              name: "brand",
              title: "BMW",
              value: "BMW",
              default: false,
            },
          ]}
        />
      </div>
      <div className={styles["filters-item"]}>
        <span className={styles["filters-item-title"]}>Body type</span>
        <Select
          name="bodyType"
          onClick={({ value }) =>
            setFilters((prev) => ({ ...prev, bodyType: value }))
          }
          options={[
            {
              id: 1,
              name: "bodyType",
              title: "Introduction form any brand option",
              value: "any_brand",
              default: true,
            },
            {
              id: 2,
              name: "bodyType",
              title: "Ford",
              value: "Ford",
              default: false,
            },
            {
              id: 3,
              name: "bodyType",
              title: "Toyota",
              value: "Toyota",
              default: false,
            },
            {
              id: 4,
              name: "bodyType",
              title: "BMW",
              value: "BMW",
              default: false,
            },
          ]}
        />
      </div>
      <div className={styles["filters-item"]}>
        <span className={styles["filters-item-title"]}>Fuel</span>
        <Select
          name="fuel"
          onClick={({ value }) =>
            setFilters((prev) => ({ ...prev, fuel: value }))
          }
          options={[
            {
              id: 1,
              name: "fuel",
              title: "Gasoline",
              value: "Gasoline",
              default: true,
            },
            {
              id: 2,
              name: "fuel",
              title: "Diesel",
              value: "Diesel",
              default: false,
            },
            {
              id: 3,
              name: "fuel",
              title: "Electric",
              value: "Electric",
              default: false,
            },
          ]}
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
                setFilters((prev) => ({ ...prev, gearboxType: e.target.value }))
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
                setFilters((prev) => ({ ...prev, gearboxType: e.target.value }))
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
            <div className={styles["filters-item-price-heading-actions-min"]}>
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
            <div className={styles["filters-item-price-heading-actions-max"]}>
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
          min={100}
          max={8500}
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
      <div className={styles["filters-item"]}>
        <span className={styles["filters-item-title"]}>Show booked?</span>
        <input
          type="checkbox"
          value={filters.isBooked}
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, isBooked: e.target.checked }))
          }
          checked={filters.isBooked}
          className={styles["filters-item-booked-input"]}
        />
      </div>
      <div className={styles["filters-item-actions"]}>
        <BaseButton
          className={styles["filters-item-actions-reset-btn"]}
          onClick={handleResetFilters}
          label="Reset filters"
        />
        <BaseButton
          className={styles["filters-item-actions-apply-btn"]}
          onClick={handleApplyFilters}
          label="Apply filters"
        />
      </div>
    </div>
  );
};

export default Filters;
