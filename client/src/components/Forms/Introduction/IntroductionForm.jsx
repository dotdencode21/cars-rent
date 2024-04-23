import { Select } from "@/components/Select/Select";

import styles from "./introduction-form.module.css";

import { selectCarOptions } from "@/mock/select.data";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const IntroductionForm = ({ onClick, preferences }) => {
  const { t } = useTranslation();

  return (
    <div className={styles["introduction-form"]}>
      {selectCarOptions.map((data) => {
        return (
          <Select
            key={data.id}
            name={data.name}
            options={data.options}
            onClick={onClick}
          />
        );
      })}
      <Link
        to="/cars"
        label={t("Introduction form search btn")}
        className={styles["introduction-form-link"]}
      >
        Find
      </Link>
    </div>
  );
};

export default IntroductionForm;
