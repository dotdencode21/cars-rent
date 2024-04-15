import { useTranslation } from "react-i18next";
import LinksListItem from "../LinksListItem/LinksListItem";
import styles from "./links-list.module.css";
import { Link } from "react-router-dom";
import Logo from "@/assets/imgs/logo/rent-rite.png";

const LinksList = ({ links }) => {
  const { t } = useTranslation();

  return (
    <div className={styles["links-list"]}>
      <Link to="/">
        <img src={Logo} className={styles["links-list-logo"]} />
      </Link>
      {links.map((link) => {
        return (
          <LinksListItem key={link.id} title={t(link.title)} to={link.to} />
        );
      })}
    </div>
  );
};

export default LinksList;
