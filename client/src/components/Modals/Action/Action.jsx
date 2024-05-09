import CreateCarForm from "@/components/Forms/CreateCar/CreateCarForm";
import BaseModal from "../BaseModal/BaseModal";
import { useState } from "react";
import { useCarStore } from "@/store/car.store";

const ActionModal = ({
  type,
  open,
  onClose,
  onCancel,
  onSubmit,
  onChangeValues,
}) => {
  const [disabled, setDisabled] = useState(false);

  const { isSuccessful } = useCarStore();

  const handleChangeValues = (values) => {
    const { name, type, brand, pricePerHour } = values;

    setDisabled(
      [name, type, brand, pricePerHour].some((value) => !value.length)
    );

    return onChangeValues({ ...values, pricePerHour: +pricePerHour });
  };

  const content = {
    create: {
      title: "Create a car",
      submitBtnText: "Create",
      body: <CreateCarForm onChangeValues={handleChangeValues} />,
      width: 550,
    },
    update: {
      title: "Update a car",
      submitBtnText: "Update",
      body: null,
    },
    delete: {
      title: "Delete a car",
      submitBtnText: "Delete",
      body: null,
    },
  };

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
      withActions={!isSuccessful}
      withHeader={!isSuccessful}
    >
      {content[type].body}
    </BaseModal>
  );
};

export default ActionModal;
