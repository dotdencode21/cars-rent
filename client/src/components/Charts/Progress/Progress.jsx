import styles from "./progress.module.css";

const ProgressChart = ({ title, percentage, color }) => {
  return (
    <div className={styles["progress-chart"]}>
      <span className={styles["progress-chart-title"]}>
        {title}
      </span>
      <div 
        className={styles["progress-chart-wrapper"]}
        style={{
          background: `linear-gradient(to right, ${color} ${percentage}%, var(--border-white-color) 0)`
        }}
      >
        <div 
          className={styles["progress-chart-wrapper-slider"]}
          style={{ left: `${percentage}%` }}
        >
          <div
            className={styles["progress-chart-wrapper-slider-point"]}
            style={{ backgroundColor: color }} 
          >
            <span className={styles["progress-chart-wrapper-slider-point-percentage"]}>
              {percentage}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressChart;