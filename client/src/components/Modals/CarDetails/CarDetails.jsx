import { useUserStore } from "@/store/user.store";
import BaseModal from "../BaseModal/BaseModal";
import styles from "./car-details.module.css";
import { useEffect, useState } from "react";
import { useCarStore } from "@/store/car.store";
import { FaCar, FaStar } from "react-icons/fa";
import { GrTechnology } from "react-icons/gr";
import { BsFuelPumpFill } from "react-icons/bs";
import { TbManualGearbox } from "react-icons/tb";
import { GiCarWheel } from "react-icons/gi";
import { MdOutlineReduceCapacity } from "react-icons/md";
import { HiCurrencyDollar } from "react-icons/hi2";
import BaseInput from "@/components/Inputs/BaseInput/BaseInput";
import { useBookStore } from "@/store/book.store";
import { convertToISO8601UTC } from "@/utils/date";

const CarDetailsModal = ({ carId, open, onClose }) => {
  const { isLogged, currentUser } = useUserStore();
  const { getCarById, currentCar } = useCarStore();
  const { bookCarByUserIdAndCarId } = useBookStore();

  const [values, setValues] = useState({ rentStartDate: "", rentEndDate: "" });

  const isAuth = isLogged && localStorage.getItem("currentUserId");

  useEffect(() => {
    getCarById(carId);
  }, [carId]);

  const isLoading = !(currentCar && Object.keys(currentCar).length);

  const handleChange = ({ target: { name, value } }) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleBook = () => {
    bookCarByUserIdAndCarId(currentUser.id, currentCar.id, {
      rentStartDate: convertToISO8601UTC(values.rentStartDate),
      rentEndDate: convertToISO8601UTC(values.rentEndDate),
      pricePerHour: +currentCar.pricePerHour,
      isBooking: true,
    }).then(() => onClose());
  };

  const disabledSubmitBtn = !(
    values.rentStartDate.length && values.rentEndDate.length
  );

  return (
    <BaseModal
      open={open}
      onClose={onClose}
      title="Car Details"
      maxWidth={650}
      submitBtnText="Book"
      cancelBtnText="Cancel"
      onCancel={onClose}
      onSubmit={handleBook}
      disabled={!isAuth || disabledSubmitBtn}
    >
      {isLoading ? (
        <span>Loading...</span>
      ) : (
        <div className={styles["car-details"]}>
          <img src={currentCar.img} className={styles["car-details-img"]} />
          <div className={styles["car-details-content"]}>
            <div className={styles["car-details-content-item"]}>
              <div className={styles["car-details-content-item-content"]}>
                <FaCar size={24} color="var(--primary-black-color)" />
                <span
                  className={styles["car-details-content-item-content-value"]}
                >
                  {currentCar.name}
                </span>
              </div>
              <div className={styles["car-details-content-item-content"]}>
                <GrTechnology size={24} color="var(--primary-black-color)" />
                <span
                  className={styles["car-details-content-item-content-value"]}
                >
                  {currentCar.brand}
                </span>
              </div>
            </div>
            <div className={styles["car-details-content-item"]}>
              <div className={styles["car-details-content-item-content"]}>
                <BsFuelPumpFill size={24} color="var(--primary-black-color)" />
                <span
                  className={styles["car-details-content-item-content-value"]}
                >
                  {currentCar.fuel}
                </span>
              </div>
              <div className={styles["car-details-content-item-content"]}>
                <TbManualGearbox size={24} color="var(--primary-black-color)" />
                <span
                  className={styles["car-details-content-item-content-value"]}
                >
                  {currentCar.gearboxType}
                </span>
              </div>
            </div>
            <div className={styles["car-details-content-item"]}>
              <div className={styles["car-details-content-item-content"]}>
                <GiCarWheel size={24} color="var(--primary-black-color)" />
                <span
                  className={styles["car-details-content-item-content-value"]}
                >
                  {currentCar.type}
                </span>
              </div>
              <div className={styles["car-details-content-item-content"]}>
                <FaStar size={24} color="var(--primary-black-color)" />
                <span
                  className={styles["car-details-content-item-content-value"]}
                >
                  {currentCar.maxRating}
                </span>
              </div>
            </div>
            <div className={styles["car-details-content-item"]}>
              <div className={styles["car-details-content-item-content"]}>
                <MdOutlineReduceCapacity
                  size={24}
                  color="var(--primary-black-color)"
                />
                <span
                  className={styles["car-details-content-item-content-value"]}
                >
                  {currentCar.amountOfBooking}
                </span>
              </div>
              <div className={styles["car-details-content-item-content"]}>
                <HiCurrencyDollar
                  size={24}
                  color="var(--primary-black-color)"
                />
                <span
                  className={styles["car-details-content-item-content-value"]}
                >
                  {currentCar.pricePerHour}$
                </span>
              </div>
            </div>
            <div className={styles["car-details-content-form"]}>
              <div className={styles["car-details-content-form-heading"]}>
                <span
                  className={styles["car-details-content-form-heading-title"]}
                >
                  Ready for booking?
                </span>
                <span
                  className={
                    styles["car-details-content-form-heading-subtitle"]
                  }
                >
                  Fill out the form below and enjoy driving!
                </span>
              </div>
              <div className={styles["car-details-content-form-inputs"]}>
                <BaseInput
                  value={values.rentStartDate}
                  onChange={handleChange}
                  placeholder="Format: (DD/MM/YYYY)"
                  inputId="rentStartDate"
                  name="rentStartDate"
                  labelText="Rent start date"
                />
                <BaseInput
                  value={values.rentEndDate}
                  onChange={handleChange}
                  placeholder="Format: (DD/MM/YYYY)"
                  inputId="rentEndDate"
                  name="rentEndDate"
                  labelText="Rent end date"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </BaseModal>
  );
};

export default CarDetailsModal;
