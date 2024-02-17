import { happyClientsData } from "@/mock/happyClients.data";
import styles from "./happy-clients.module.css";
import Slider from "react-slick";
import HappyClientsSlide from "@/components/Slides/HappyClients/HappyClientsSlide";
import { useTranslation } from "react-i18next";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 2,
  arrows: false,
};

const HappyClientsSection = () => {
  const { t } = useTranslation();

  return (
    <div className={styles["happy-clients-section"]}>
      <span className={styles["happy-clients-section-title"]}>
        {t("Happy clients section title")}
      </span>
      <div className={styles["happy-clients-section-carousel"]}>
        <Slider {...settings}>
          {
            happyClientsData.map(user => {
              return (
                <HappyClientsSlide
                  key={user.id}
                  {...user}
                />
              );
            })
          }
        </Slider>
      </div>
    </div>
  );
};

export default HappyClientsSection;