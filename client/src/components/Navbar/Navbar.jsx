import styles from "./navbar.module.css";

import { links } from "./Links/links";
import LinksList from "./Links/LinksList/LinksList";
import BaseButton from "../Buttons/BaseButton/BaseButton";
import { Select as ChangeLanguageSelect } from "../Select/Select";
import { selectCountryOptions } from "@/mock/select.data";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const handleChangeLanguage = ({ countryCode }) => {
    i18n.changeLanguage(countryCode);
  }

  return (
    <div className={styles["navbar"]}>
      <LinksList links={links} />
      <div className={styles["navbar-actions"]}>
        <BaseButton label={t("Navbar sign in btn label")}/>
        <div className={styles["navbar-actions-default"]}>
          <ChangeLanguageSelect
            hasIcons
            minWidth={176}
            options={selectCountryOptions}
            onClick={handleChangeLanguage}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;