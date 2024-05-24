import { Select } from "@/components/Select/Select";

import styles from "./introduction-form.module.css";

import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const IntroductionForm = ({ cars }) => {
  const { t } = useTranslation();

  const [preferences, setPreferences] = useState({
    brand: "any_brand",
    type: "any_type",
    price: "low_to_high",
  });

  const { type, brand } = useMemo(() => {
    return {
      type:
        [
          {
            id: uuidv4(),
            name: "type",
            title: "Introduction form any type option",
            value: "any_type",
            default: true,
          },
          ...[...new Set(cars?.map((car) => car.type))].map((type) => ({
            id: uuidv4(),
            name: "type",
            title: type,
            value: type,
            default: false,
          })),
        ] || [],
      brand:
        [
          {
            id: uuidv4(),
            name: "brand",
            title: "Introduction form any brand option",
            value: "any_brand",
            default: true,
          },
          ...[...new Set(cars?.map((car) => car.brand))].map((brand) => ({
            id: uuidv4(),
            name: "brand",
            title: brand,
            value: brand,
            default: false,
          })),
        ] || [],
    };
  }, [cars]);

  const handleClick = ({ name, value }) => {
    return setPreferences((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className={styles["introduction-form"]}>
      {[
        {
          id: uuidv4(),
          name: "brand",
          options: brand,
        },
        {
          id: uuidv4(),
          name: "type",
          options: type,
        },
        {
          id: uuidv4(),
          name: "price",
          options: [
            {
              id: uuidv4(),
              name: "price",
              title: "Introduction form price low to high",
              value: "low_to_high",
              default: true,
            },
            {
              id: uuidv4(),
              name: "price",
              title: "Introduction form price high to low",
              value: "high_to_low",
              default: false,
            },
          ],
        },
      ].map((carOption) => {
        return (
          <Select
            key={carOption.id}
            name={carOption.name}
            options={carOption.options}
            onClick={handleClick}
          />
        );
      })}
      <Link
        to={`/cars?brand=${preferences.brand}&type=${preferences.type}&price=${preferences.price}`}
        label={t("Introduction form search btn")}
        className={styles["introduction-form-link"]}
      >
        Find
      </Link>
    </div>
  );
};

export default IntroductionForm;
