import styles from "./auth-layout.module.css";

import { useTranslation } from "react-i18next";

import { Select as ChangeLanguageSelect } from "@/components/Select/Select";
import { selectCountryOptions } from "@/mock/select.data";

const AuthLayout = ({ children }) => {
  const { i18n } = useTranslation();

  const handleChangeLanguage = ({ countryCode }) => {
    i18n.changeLanguage(countryCode);
  };

  return (
    <div className={styles["auth-layout"]}>
      <div className={styles["auth-layout-navbar"]}>
        <ChangeLanguageSelect
          type="lang"
          hasIcons
          options={selectCountryOptions}
          onClick={handleChangeLanguage}
        />
      </div>
      {children}
    </div>
  )
};

export default AuthLayout;