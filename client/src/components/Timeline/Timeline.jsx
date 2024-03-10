import styles from "./timeline.module.css";

const Timeline = () => {
  return (
    <div className={styles["timeline"]}>
      {
        [
          { title: "Establishment of Cars Rent", year: 1999 },
          { title: "Opening offices in Illinois and Florida", year: 2005 },
          { title: "Attracting new partners", year: 2010 },
          { title: "Gaining national recognition", year: 2024 },
        ].map((timeline, timelineIndex) => {
          return (
            <div
              key={timelineIndex}
              className={styles["timeline-item"]}
            >
              <span className={styles["timeline-item-title"]}>
                {timeline.title}
              </span>
              <div className={styles["timeline-item-circle"]}/>
              <span className={styles["timeline-item-year"]}>
                {timeline.year}
              </span>
            </div>
          );
        })
      }
    </div>
  );
};

export default Timeline;