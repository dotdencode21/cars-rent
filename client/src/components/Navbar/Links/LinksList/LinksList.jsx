import { useTranslation } from "react-i18next";
import LinksListItem from "../LinksListItem/LinksListItem";
import styles from "./links-list.module.css";

const LinksList = ({ links }) => {
  const { t } = useTranslation();

  return (
    <div className={styles["links-list"]}>
      {
        links.map(link => {
          return (
            <LinksListItem 
              key={link.id}
              title={t(link.title)}
              to={link.to}
            />
          )
        })
      }
    </div>
  );
};

export default LinksList;