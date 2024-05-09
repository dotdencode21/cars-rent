import { useFormik } from "formik";
import styles from "./create-car-form.module.css";
import { createCarSchema } from "@/validation/schemas/createCar.schema";
import { useEffect, useState } from "react";
import { convertToBase64 } from "@/utils/file";
import { MdOutlineFileUpload, MdDownloadDone } from "react-icons/md";
import BaseInput from "@/components/Inputs/BaseInput/BaseInput";
import { useCarStore } from "@/store/car.store";
import cn from "classnames";

const CreateCarForm = ({ onChangeValues }) => {
  const [carImage, setCarImage] = useState("");
  const [carFuelAndGearboxValues, setCarFuelAndGearboxValues] = useState({
    fuel: "Gasoline",
    gearboxType: "Mechanics",
  });

  const { isSuccessful } = useCarStore();

  const { errors, values, handleChange, resetForm } = useFormik({
    initialValues: {
      name: "",
      type: "",
      brand: "",
      pricePerHour: "",
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
    <form
      className={cn({
        [styles["create-car-form"]]: true,
        [styles["create-car-form_done"]]: isSuccessful,
      })}
    >
      {isSuccessful ? (
        <div className={styles["create-car-form_done-wrapper"]}>
          <MdDownloadDone color="var(--primary-green-color)" size="5.5rem" />
          <span className={styles["create-car-form_done-wrapper-label"]}>
            Car successfully created!
          </span>
        </div>
      ) : (
        <>
          {carImage ? (
            <img
              src={carImage}
              className={styles["create-car-form-img"]}
              onDoubleClick={() => setCarImage("")}
            />
          ) : (
            <label
              htmlFor="inputFile"
              className={styles["create-car-form-input-file"]}
            >
              <div className={styles["create-car-form-input-file-content"]}>
                <MdOutlineFileUpload
                  size="1.75rem"
                  color="var(--primary-black-color)"
                />
                <span
                  className={styles["create-car-form-input-file-content-label"]}
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
          <div className={styles["create-car-form-name-and-type"]}>
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
          <div className={styles["create-car-form-brand-and-price"]}>
            <BaseInput
              value={values.brand}
              onChange={handleChange}
              placeholder="Brand"
              inputId="brand"
              name="brand"
              error={errors["brand"]}
              labelText="Brand"
            />
            <div className={styles["create-car-form-brand-and-price-wrapper"]}>
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
                  styles["create-car-form-brand-and-price-wrapper-tip"]
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
          <div className={styles["create-car-form-fuel"]}>
            <span className={styles["create-car-form-fuel-title"]}>Fuel</span>
            <div className={styles["create-car-form-fuel-inputs"]}>
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
                    className={styles["create-car-form-fuel-inputs-item"]}
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
                        styles["create-car-form-fuel-inputs-item-radio"]
                      }
                    />
                    {item.label}
                  </label>
                );
              })}
            </div>
          </div>
          <div className={styles["create-car-form-fuel"]}>
            <span className={styles["create-car-form-fuel-title"]}>
              Gearbox type
            </span>
            <div className={styles["create-car-form-fuel-inputs"]}>
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
                    className={styles["create-car-form-fuel-inputs-item"]}
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
                      checked={
                        carFuelAndGearboxValues.gearboxType === item.value
                      }
                      className={
                        styles["create-car-form-fuel-inputs-item-radio"]
                      }
                    />
                    {item.label}
                  </label>
                );
              })}
            </div>
          </div>
        </>
      )}
    </form>
  );
};

export default CreateCarForm;
