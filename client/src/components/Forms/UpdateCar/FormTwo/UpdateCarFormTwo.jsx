import { useFormik } from "formik";
import styles from "./update-car-form-two.module.css";
import { createCarSchema } from "@/validation/schemas/createCar.schema";
import { useEffect, useState } from "react";
import { convertToBase64 } from "@/utils/file";
import { MdOutlineFileUpload } from "react-icons/md";
import BaseInput from "@/components/Inputs/BaseInput/BaseInput";

const UpdateCarFormTwo = ({ onChangeValues, currentCar }) => {
  const [carImage, setCarImage] = useState(currentCar.img);
  const [carFuelAndGearboxValues, setCarFuelAndGearboxValues] = useState({
    fuel: currentCar.fuel,
    gearboxType: currentCar.gearboxType,
  });

  const { errors, values, handleChange, resetForm } = useFormik({
    initialValues: {
      name: currentCar.name,
      type: currentCar.type,
      brand: currentCar.brand,
      pricePerHour: currentCar.pricePerHour,
    },
    validationSchema: createCarSchema,
  });

  useEffect(() => {
    onChangeValues({ ...values, ...carFuelAndGearboxValues, img: carImage });
  }, [values, carFuelAndGearboxValues, carImage]);

  useEffect(() => {
    return () => resetForm();
  }, []);

  const handleChangeFile = async (e) => {
    if (e.target.files) {
      const file = e.target.files[0];
      const convertedFile = await convertToBase64(file);
      setCarImage(convertedFile);
    }
  };

  const handleKeyDown = (e) => {
    if (/[^0-9]/g.test(e.key) && e.key !== "Backspace") {
      e.preventDefault();
    }
  };

  return (
    <form className={styles["update-car-form-two"]}>
      {carImage ? (
        <img
          src={carImage}
          className={styles["update-car-form-two-img"]}
          onDoubleClick={() => setCarImage("")}
        />
      ) : (
        <label
          htmlFor="inputFile"
          className={styles["update-car-form-two-input-file"]}
        >
          <div className={styles["update-car-form-two-input-file-content"]}>
            <MdOutlineFileUpload
              size="1.75rem"
              color="var(--primary-black-color)"
            />
            <span
              className={styles["update-car-form-two-input-file-content-label"]}
            >
              Choose a file
            </span>
          </div>
          <input
            type="file"
            id="inputFile"
            onChange={handleChangeFile}
            style={{ visibility: "hidden" }}
          />
        </label>
      )}
      <div className={styles["update-car-form-two-name-and-type"]}>
        <BaseInput
          value={values.name}
          onChange={handleChange}
          placeholder="Name"
          inputId="name"
          name="name"
          error={errors["name"]}
          labelText="Name"
        />
        <BaseInput
          value={values.type}
          onChange={handleChange}
          placeholder="Type"
          inputId="type"
          name="type"
          error={errors["type"]}
          labelText="Type"
        />
      </div>
      <div className={styles["update-car-form-two-brand-and-price"]}>
        <BaseInput
          value={values.brand}
          onChange={handleChange}
          placeholder="Brand"
          inputId="brand"
          name="brand"
          error={errors["brand"]}
          labelText="Brand"
        />
        <div className={styles["update-car-form-two-brand-and-price-wrapper"]}>
          <BaseInput
            value={values.pricePerHour}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder="Price"
            inputId="pricePerHour"
            name="pricePerHour"
            error={errors["pricePerHour"]}
            labelText="Price"
          />
          <span
            className={
              styles["update-car-form-two-brand-and-price-wrapper-tip"]
            }
            style={{
              paddingBottom:
                errors && Object.keys(errors).length ? "1.75rem" : "0.5rem",
            }}
          >
            $/hour
          </span>
        </div>
      </div>
      <div className={styles["update-car-form-two-fuel"]}>
        <span className={styles["update-car-form-two-fuel-title"]}>Fuel</span>
        <div className={styles["update-car-form-two-fuel-inputs"]}>
          {[
            {
              label: "Gasoline",
              value: "Gasoline",
            },
            {
              label: "Diesel",
              value: "Diesel",
            },
            {
              label: "Hybrid",
              value: "Hybrid",
            },
            {
              label: "Electric",
              value: "Electric",
            },
          ].map((item, itemIndex) => {
            return (
              <label
                key={itemIndex}
                className={styles["update-car-form-two-fuel-inputs-item"]}
              >
                <input
                  type="radio"
                  value={item.value}
                  onChange={(e) =>
                    setCarFuelAndGearboxValues((prev) => ({
                      ...prev,
                      fuel: e.target.value,
                    }))
                  }
                  checked={carFuelAndGearboxValues.fuel === item.value}
                  className={
                    styles["update-car-form-two-fuel-inputs-item-radio"]
                  }
                />
                {item.label}
              </label>
            );
          })}
        </div>
      </div>
      <div className={styles["update-car-form-two-fuel"]}>
        <span className={styles["update-car-form-two-fuel-title"]}>
          Gearbox type
        </span>
        <div className={styles["update-car-form-two-fuel-inputs"]}>
          {[
            {
              label: "Mechanics",
              value: "Mechanics",
            },
            {
              label: "Automatic",
              value: "Automatic",
            },
          ].map((item, itemIndex) => {
            return (
              <label
                key={itemIndex}
                className={styles["update-car-form-two-fuel-inputs-item"]}
              >
                <input
                  type="radio"
                  value={item.value}
                  onChange={(e) =>
                    setCarFuelAndGearboxValues((prev) => ({
                      ...prev,
                      gearboxType: e.target.value,
                    }))
                  }
                  checked={carFuelAndGearboxValues.gearboxType === item.value}
                  className={
                    styles["update-car-form-two-fuel-inputs-item-radio"]
                  }
                />
                {item.label}
              </label>
            );
          })}
        </div>
      </div>
    </form>
  );
};

export default UpdateCarFormTwo;
