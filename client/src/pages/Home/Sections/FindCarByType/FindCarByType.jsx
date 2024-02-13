import styles from "./find-car-by-type.module.css";

import { IoCarOutline } from "react-icons/io5";
import { MdOutlineElectricBolt } from "react-icons/md";
import { TbCarSuv } from "react-icons/tb";
import { BsBusFront } from "react-icons/bs";
import { findCarByTypeData } from "@/mock/findCarByType.data";

import halfRoundedBlockImg from "@/assets/imgs/decor/half-rounded-block.svg";
import { Link } from "react-router-dom";

const carTypeIcon = {
  "Sedan": <IoCarOutline className={styles["find-car-by-type-section-types-type-blurb-icon"]} />,
  "Electric Car": <MdOutlineElectricBolt className={styles["find-car-by-type-section-types-type-blurb-icon"]} />,
  "SUV": <TbCarSuv className={styles["find-car-by-type-section-types-type-blurb-icon"]} />,
  "Bus & Coach": <BsBusFront className={styles["find-car-by-type-section-types-type-blurb-icon"]} />
};

const FindCarByTypeSection = () => {
  return (
    <div className={styles["find-car-by-type-section"]}>
      <span className={styles["find-car-by-type-section-title"]}>
        Find Your Vehicle by Type
      </span>
      <div className={styles["find-car-by-type-section-types"]}>
        {
          findCarByTypeData.map(type => {
            return (
              <div
                key={type.id}
                className={styles["find-car-by-type-section-types-type"]}
              >
                <div className={styles["find-car-by-type-section-types-type-blurb"]}>
                  {carTypeIcon[type.title]}
                </div>
                <img src={halfRoundedBlockImg} />
                <div className={styles["find-car-by-type-section-types-type-details"]}>
                  <span className={styles["find-car-by-type-section-types-type-details-title"]}>
                    {type.title}
                  </span>
                  <span className={styles["find-car-by-type-section-types-type-details-amount"]}>
                    {type.amount} cars
                  </span>
                  <Link
                    to="#"
                    className={styles["find-car-by-type-section-types-type-details-link"]}
                  >
                    {type.linkTitle}
                  </Link>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default FindCarByTypeSection;

