import styles from "./actions.module.css";

import cn from "classnames";

import { FaPlus } from "react-icons/fa6";
import { MdModeEdit } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";
import ActionModal from "@/components/Modals/Action/Action";

import { useEffect, useState } from "react";
import { useCarStore } from "@/store/car.store";
import { useNavigate } from "react-router-dom";

const ActionsSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState("");
  const [values, setValues] = useState(null);

  const navigate = useNavigate();

  const { createCar, isSuccessful } = useCarStore();

  const handleOpenActionModal = (type) => {
    setIsOpen(true);
    setType(type);
  };

  const handleChangeValues = (values) => setValues(values);

  const handleSubmit = async () => {
    if (type === "create") {
      await createCar(values);
    }
  };

  useEffect(() => {
    let timeoutId = null;

    if (isSuccessful) {
      if (type === "create") {
        timeoutId = setTimeout(() => {
          navigate("/cars");
        }, 3000);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [isSuccessful]);

  return (
    <div className={styles["actions"]}>
      <button
        className={cn({
          [styles["actions-btn"]]: true,
          [styles["actions-btn_create"]]: true,
        })}
        onClick={() => handleOpenActionModal("create")}
      >
        <FaPlus size="1.25rem" color="var(--primary-white-color)" />
        <span>Create a car</span>
      </button>
      <button
        className={cn({
          [styles["actions-btn"]]: true,
          [styles["actions-btn_update"]]: true,
        })}
        onClick={() => handleOpenActionModal("update")}
      >
        <MdModeEdit size="1.25rem" color="var(--primary-white-color)" />
        <span>Update a car</span>
      </button>
      <button
        className={cn({
          [styles["actions-btn"]]: true,
          [styles["actions-btn_delete"]]: true,
        })}
        onClick={() => handleOpenActionModal("delete")}
      >
        <FaTrashAlt size="1.25rem" color="var(--primary-white-color)" />
        <span>Delete a car</span>
      </button>
      {isOpen && (
        <ActionModal
          type={type}
          open={isOpen}
          onClose={() => setIsOpen(false)}
          onCancel={() => setIsOpen(false)}
          onChangeValues={handleChangeValues}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default ActionsSection;
