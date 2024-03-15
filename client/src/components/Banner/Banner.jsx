import styles from "./banner.module.css";

const Banner = ({ show, icon, title, children }) => {
  return (
    <>
      {
        show && (
          <div className={styles["banner"]}>
            <div className={styles["banner-heading"]}>
              {icon}
              <span className={styles["banner-heading-title"]}>
                {title}
              </span>
            </div>
            <div className={styles["banner-actions"]}>
              {children}
            </div>
          </div>
        )
      }
    </>
  );
};

export default Banner;