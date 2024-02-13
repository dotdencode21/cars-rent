import Column from "./Column/Column";
import styles from "./details-section.module.css";

const DetailsSection = () => {
  return (
    <div className={styles["details-section"]}>
      {
        ["ABOUT_US", "POPULAR_NEWS", "QUICK_LINKS"].map((title, titleIndex) => {
          return <Column key={titleIndex} title={title} /> 
        })
      }
    </div>
  );
};

export default DetailsSection;