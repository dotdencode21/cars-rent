import styles from "./navbar.module.css";

import { links } from "@/mock/links";
import LinksList from "./Links/LinksList/LinksList";
import { Select as ChangeLanguageSelect } from "../Select/Select";
import { selectCountryOptions } from "@/mock/select.data";
import { useTranslation } from "react-i18next";
import LinkButton from "../Buttons/LinkButton/LinkButton";
import { useUserStore } from "@/store/user.store";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { GrFavorite } from "react-icons/gr";
import Avatar from "../Avatar/Avatar";

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const { isLogged, getUserById, currentUser } = useUserStore();

  const isAuth = isLogged && JSON.parse(localStorage.getItem("currentUserId"));

  const handleChangeLanguage = ({ countryCode }) => {
    i18n.changeLanguage(countryCode);
  };

  useEffect(() => {
    const userId = JSON.parse(localStorage.getItem("currentUserId"));

    if (userId) {
      getUserById(userId);
    }
  }, []);

  return (
    <div className={styles["navbar"]}>
      <LinksList links={links} />
      <div className={styles["navbar-actions"]}>
        <Link
          to="/"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <GrFavorite
            color="var(--primary-white-color)"
            size="1.75rem"
            style={{ marginRight: "2rem" }}
          />
        </Link>
        {isAuth ? (
          <Avatar currentUser={currentUser} />
        ) : (
          <LinkButton
            buttonStyle={{ width: "100%" }}
            label={t("Navbar sign in btn label")}
            to="sign-in"
          />
        )}
        <ChangeLanguageSelect
          type="lang"
          hasIcons
          options={selectCountryOptions}
          onClick={handleChangeLanguage}
        />
      </div>
    </div>
  );
};

export default Navbar;
