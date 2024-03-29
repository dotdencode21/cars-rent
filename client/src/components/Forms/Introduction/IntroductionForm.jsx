import { Select } from "@/components/Select/Select";

import styles from "./introduction-form.module.css";

import { selectCarOptions } from "@/mock/select.data";
import BaseButton from "@/components/Buttons/BaseButton/BaseButton";
import { useTranslation } from "react-i18next";

const IntroductionForm = ({ onClick, preferences }) => {
  const { t } = useTranslation();

  return (
    <div className={styles["introduction-form"]}>
      {
        selectCarOptions.map(data => {
          return (
            <Select
              key={data.id}
              name={data.name}
              options={data.options}
              onClick={onClick} 
            />
          )
        })
      }
      <BaseButton label={t("Introduction form search btn")} />
    </div>
  )
};

export default IntroductionForm;