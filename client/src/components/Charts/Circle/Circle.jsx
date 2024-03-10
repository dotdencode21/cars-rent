import styles from "./circle.module.css";

const CircleChart = ({ title, color, percentage }) => {
  return (
    <div className={styles["circle-chart"]}>
      <div className={styles["circle-chart-wrapper"]}>
        <div 
          style={{ 
            background: `radial-gradient(closest-side, white 75%, transparent 0), conic-gradient(${color} ${percentage}%, transparent 0)`
          }} 
          className={styles["circle-chart-wrapper-progress"]} 
        >
          <span className={styles["circle-chart-wrapper-progress-percentage"]}>{percentage}%</span>
        </div>
      </div>
      <span className={styles["circle-chart-title"]}>
        {title}
      </span>
    </div>
  );
};

export default CircleChart;