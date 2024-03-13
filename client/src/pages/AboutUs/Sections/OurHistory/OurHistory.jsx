import styles from "./our-history.module.css";

import audiImg from "@/assets/imgs/cars/audi.jpg";
import porscheImg from "@/assets/imgs/cars/porsche.jpg";
import teslaImg from "@/assets/imgs/cars/tesla.jpg";
import mercedesImg from "@/assets/imgs/cars/mercedes.jpg";
import IconButton from "@/components/Buttons/IconButton/IconButton";

import { RxZoomIn } from "react-icons/rx";
import PreviewModal from "@/components/Modals/Preview/Preview";
import { useState } from "react";
import Timeline from "@/components/Timeline/Timeline";
import { useTranslation } from "react-i18next";

const OurHistorySection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImgSrc, setCurrentImgSrc] = useState("");

  const { t } = useTranslation();

  const handleOpen = imgSrc => {
    setIsOpen(true);
    setCurrentImgSrc(imgSrc);
  };

  const handleClose = () => {
    setIsOpen(false);
    setCurrentImgSrc("");
  };

  return (
    <div className={styles["our-history-section"]}>
      <span className={styles["our-history-section-title"]}>
        {t("Our history section title")}
      </span>
      <div className={styles["our-history-section-content"]}>
        <div className={styles["our-history-section-content-cars"]}>
          {
            [
              audiImg,
              porscheImg,
              teslaImg,
              mercedesImg
            ].map((img, imgIndex) => {
              return (
                <div 
                  key={imgIndex} 
                  className={styles["our-history-section-content-cars-container"]}
                >
                  <img className={styles["our-history-section-content-cars-container-img"]} src={img} />
                  <div className={styles["our-history-section-content-cars-img-wrapper"]}>
                    <IconButton 
                      icon={<RxZoomIn size="3rem" color="var(--primary-white-color)" />}
                      onClick={() => handleOpen(img)}
                    />
                  </div>
                </div>
              )
            })
          }
        </div>
        <Timeline />
      </div>
      <PreviewModal
        open={isOpen}
        src={currentImgSrc}
        onOutsideClick={handleClose}
      />
    </div>
  )
};

export default OurHistorySection;