import CreateCarForm from "@/components/Forms/CreateCar/CreateCarForm";
import DeleteCarForm from "@/components/Forms/DeleteCar/DeleteCarForm";
import BaseModal from "../BaseModal/BaseModal";
import { useEffect, useMemo, useState } from "react";
import { useCarStore } from "@/store/car.store";
import styles from "./action.module.css";
import { MdDownloadDone } from "react-icons/md";
import UpdateCarFormTwo from "@/components/Forms/UpdateCar/FormTwo/UpdateCarFormTwo";
import UpdateCarFormOne from "@/components/Forms/UpdateCar/FormOne/UpdateCarFormOne";

const SuccessfulMessage = ({ type }) => {
  const message = {
    create: "Car successfully created!",
    update: "Car successfully updated!",
    delete: "Car successfully deleted!",
  };

  return (
    <div className={styles["action-successful-message"]}>
      <MdDownloadDone color="var(--primary-green-color)" size="5.5rem" />
      <span className={styles["action-successful-message-text"]}>
        {message[type]}
      </span>
    </div>
  );
};

const ActionModal = ({
  type,
  open,
  carId,
  onClose,
  onCancel,
  onSubmit,
  onDelete,
  onDoubleClick,
  onChangeValues,
  onChooseCar,
  currentCar,
}) => {
  const [disabled, setDisabled] = useState(false);

  const { isSuccessful, cars } = useCarStore();

  const isCurrentCar = !!(currentCar && Object.keys(currentCar).length);
  const hideActions = type === "delete" || isCurrentCar || type === "create";

  const handleChangeValues = (values) => {
    const { name, type, brand, pricePerHour } = values;

    setDisabled(
      isCurrentCar
        ? [
            currentCar.name,
            currentCar.type,
            currentCar.brand,
            String(currentCar.pricePerHour),
          ].some((value) => !value.length)
        : [name, type, brand, pricePerHour].some((value) => !value.length)
    );

    return onChangeValues({ ...values, pricePerHour: +pricePerHour });
  };

  const handleDeleteCar = (carId) => onDelete(carId);
  const handleChooseCar = (carId) => onChooseCar(carId);

  useEffect(() => {
    if (type === "delete") {
      setDisabled(!carId);
    }

    if (type === "update") {
      setDisabled(!isCurrentCar);
    }
  }, [type, carId, isCurrentCar]);

  const content = useMemo(() => {
    return {
      create: {
        title: "Create a car",
        submitBtnText: "Create",
        body: <CreateCarForm onChangeValues={handleChangeValues} />,
        width: 550,
      },
      update: {
        title: isCurrentCar ? "Update a car" : "Choose the car to update",
        submitBtnText: "Update",
        body: isCurrentCar ? (
          <UpdateCarFormTwo
            currentCar={currentCar}
            onChangeValues={handleChangeValues}
          />
        ) : (
          <UpdateCarFormOne cars={cars} onClick={handleChooseCar} />
        ),
        width: isCurrentCar ? 550 : 1050,
      },
      delete: {
        title: "Delete a car",
        submitBtnText: "Delete",
        body: (
          <DeleteCarForm
            cars={cars}
            onClick={handleDeleteCar}
            carId={carId}
            onDoubleClick={onDoubleClick}
          />
        ),
        width: 1050,
      },
    };
  }, [isCurrentCar, carId]);

  return (
    <BaseModal
      title={content[type].title}
      open={open}
      onClose={onClose}
      onCancel={onCancel}
      maxWidth={content[type].width}
      cancelBtnText="Close"
      submitBtnText={content[type].submitBtnText}
      onSubmit={onSubmit}
      disabled={disabled}
      withActions={hideActions && !isSuccessful}
      withHeader={!isSuccessful}
    >
      {isSuccessful ? <SuccessfulMessage type={type} /> : content[type].body}
    </BaseModal>
  );
};

export default ActionModal;
