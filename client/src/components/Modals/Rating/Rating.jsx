import BaseModal from "../BaseModal/BaseModal";
import styles from "./rating.module.css";
import { FaStar } from "react-icons/fa6";
import { useState } from "react";

const RatingModal = ({ open, onClose, onRate }) => {
  const [rating, setRating] = useState({
    onClickValue: null,
    onHoverValue: null,
  });

  const handleRate = () => {
    onRate(rating.onClickValue);
  };

  return (
    <BaseModal
      open={open}
      onClose={onClose}
      title="Car Rating"
      maxWidth={550}
      submitBtnText="Rate"
      cancelBtnText="Cancel"
      onCancel={onClose}
      onSubmit={handleRate}
      disabled={!rating.onClickValue}
    >
      <div className={styles["rating"]}>
        <div className={styles["rating-heading"]}>
          <span className={styles["rating-title"]}>Rate the car!</span>
          <span className={styles["rating-subtitle"]}>
            This will help improve our service in the future
          </span>
        </div>
        <div>
          {[1, 2, 3, 4, 5].map((_, ratingIndex) => {
            return (
              <FaStar
                key={ratingIndex}
                size="2.75rem"
                style={{
                  padding: "0 0.25rem",
                  cursor: "pointer",
                  color:
                    rating.onClickValue <= ratingIndex &&
                    rating.onHoverValue <= ratingIndex
                      ? "var(--primary-grey-color)"
                      : "var(--primary-black-color)",
                }}
                onClick={() =>
                  setRating((prev) => ({
                    ...prev,
                    onClickValue: ratingIndex + 1,
                  }))
                }
                onMouseMove={() =>
                  setRating((prev) => ({
                    ...prev,
                    onHoverValue: ratingIndex + 1,
                  }))
                }
                onMouseOut={() =>
                  setRating((prev) => ({ ...prev, onHoverValue: null }))
                }
              />
            );
          })}
        </div>
      </div>
    </BaseModal>
  );
};

export default RatingModal;
