import styles from "./brand.module.css";

const Brand = ({ brand }) => {
  return (
    <div className={styles["brand"]}>
      <img
        src={brand}
        className={styles["brand-img"]}
      />
    </div>
  );
};

export default Brand;