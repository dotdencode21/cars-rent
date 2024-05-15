import { Select } from "@/components/Select/Select";

import styles from "./introduction-form.module.css";

import { selectCarOptions } from "@/mock/select.data";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const IntroductionForm = () => {
  const { t } = useTranslation();

  const [preferences, setPreferences] = useState({
    brand: "any_brand",
    type: "any_type",
    price: "low_to_high",
  });

  const [carOptions, setCarOptions] = useState(selectCarOptions);

  useEffect(() => {
    return () => setCarOptions(selectCarOptions);
  }, []);

  const handleClick = ({ name, value }) => {
    return setPreferences((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className={styles["introduction-form"]}>
      {carOptions.map((data) => {
        return (
          <Select
            key={data.id}
            name={data.name}
            options={data.options}
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
