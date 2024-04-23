import styles from "./recommendations.module.css";
import cn from "classnames";

const RecommendationsSection = () => {
  return (
    <div
      className={cn({
        [styles["recommendations"]]: true,
        [styles["recommendations-without-content"]]: true,
      })}
    >
      {false ? (
        <span>has recommendations</span>
      ) : (
        <span className={styles["recommendations-without-content-title"]}>
          We don't have any recommendations for you now!
        </span>
      )}
    </div>
  );
};

export default RecommendationsSection;
