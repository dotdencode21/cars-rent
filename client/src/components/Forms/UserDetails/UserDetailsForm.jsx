import BaseInput from "@/components/Inputs/BaseInput/BaseInput";
import styles from "./user-details-form.module.css";
import { useEffect, useState } from "react";
import { Select } from "@/components/Select/Select";

const UserDetailsForm = ({
  errors = null,
  values = null,
  handleChange = () => {},
  onClick = () => {},
  onCitySelect,
  cities = [],
}) => {
  const [leftGap, setLeftGap] = useState(0);

  useEffect(() => {
    setLeftGap(((values.age - 18) * 100) / (100 - 18));
  }, [values.age]);

  return (
    <div className={styles["user-details-form"]}>
      <div className={styles["user-details-form-name"]}>
        <BaseInput
          value={values.firstName}
          onChange={handleChange}
          placeholder="First name"
          inputId="firstName"
          name="firstName"
          error={!values.firstName ? "First name field is required" : ""}
          labelText="First name"
        />
        <BaseInput
          value={values.lastName}
          onChange={handleChange}
          placeholder="Last name"
          inputId="lastName"
          name="lastName"
          error={!values.lastName ? "Last name field is required" : ""}
          labelText="Last name"
        />
      </div>
      <div className={styles["user-details-form-age-and-gender"]}>
        <div className={styles["user-details-form-age-and-gender-wrapper"]}>
          <span className={styles["user-details-form-age-label"]}>Age</span>
          <div className={styles["user-details-form-age-wrapper"]}>
            <span
              className={styles["user-details-form-age-tip"]}
              style={{ left: `calc(${leftGap}% + (${0 - leftGap * 0.15}px))` }}
            >
              {values.age}
            </span>
            <input
              type="range"
              id="age"
              name="age"
              value={values.age}
              onChange={handleChange}
              min="18"
              max="100"
              className={styles["user-details-form-age-input"]}
            />
          </div>
        </div>
        <div className={styles["user-details-form-age-and-gender-wrapper"]}>
          <span
            className={
              styles["user-details-form-gender-and-location-wrapper-title"]
            }
          >
            Gender
          </span>
          <Select
            onClick={onClick}
            name="gender"
            options={[
              {
                id: 1,
                name: "gender",
                title: "Male",
                value: "male",
                default: true,
              },
              {
                id: 2,
                name: "gender",
                title: "Female",
                value: "female",
                default: false,
              },
            ]}
          />
        </div>
      </div>
      <div className={styles["user-details-form-location"]}>
        <BaseInput
          value={values.location}
          onChange={handleChange}
          placeholder="Location"
          inputId="location"
          name="location"
          error={!values.location ? "Location field is required" : ""}
          labelText="Location"
        />
        {!!values.location.length &&
          !cities.filter(
            (city) => city.name.toLowerCase() === values.location.toLowerCase()
          ).length &&
          !!cities.filter((city) =>
            city.name.toLowerCase().includes(values.location.toLowerCase())
          ).length && (
            <div className={styles["user-details-form-location-cities"]}>
              {cities
                .filter((city) =>
                  city.name
                    .toLowerCase()
                    .includes(values.location.toLowerCase())
                )
                .map((city, cityIndex) => {
                  return (
                    <button
                      className={
                        styles["user-details-form-location-cities-item"]
                      }
                      key={cityIndex}
                      onClick={() => onCitySelect(city.name)}
                    >
                      {city.name}
                    </button>
                  );
                })}
            </div>
          )}
      </div>
    </div>
  );
};

export default UserDetailsForm;
