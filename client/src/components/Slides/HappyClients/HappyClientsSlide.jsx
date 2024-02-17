import { useTranslation } from "react-i18next";
import styles from "./happy-clients-slide.module.css";
import { COMMENTS_CONTENT } from "@/constants/happyClients";

const HappyClientsSlide = ({ avatar, username, status, comment }) => {
  const { t } = useTranslation();

  return (
    <div className={styles["happy-clients-slide"]}>
      <div className={styles["happy-clients-slide-user"]}>
        <img src={avatar} className={styles["happy-clients-slide-user-avatar"]}/>
        <div className={styles["happy-clients-slide-user-details"]}>
          <span className={styles["happy-clients-slide-user-details-username"]}>
            {username}
          </span>
          <span className={styles["happy-clients-slide-user-details-status"]}>
            {t({ "Regular client": "Happy clients section status label" }[status])}
          </span>
        </div>
      </div>
      <span className={styles["happy-clients-slide-comment"]}>
        {t(COMMENTS_CONTENT[comment])}
      </span>
    </div>
  );
};

export default HappyClientsSlide;