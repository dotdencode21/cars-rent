import styles from "./navbar.module.css";

import { links } from "@/mock/links";
import LinksList from "./Links/LinksList/LinksList";
import { Select as ChangeLanguageSelect } from "../Select/Select";
import { selectCountryOptions } from "@/mock/select.data";
import { useTranslation } from "react-i18next";
import LinkButton from "../Buttons/LinkButton/LinkButton";

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const handleChangeLanguage = ({ countryCode }) => {
    i18n.changeLanguage(countryCode);
  }

  return (
    <div className={styles["navbar"]}>
      <LinksList links={links} />
      <div className={styles["navbar-actions"]}>
        <LinkButton 
          label={t("Navbar sign in btn label")}
          to="#"
        />
        <div className={styles["navbar-actions-default"]}>
          <ChangeLanguageSelect
            type="lang"
            hasIcons
            options={selectCountryOptions}
            onClick={handleChangeLanguage}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;