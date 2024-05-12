import { useFormik } from "formik";
import BaseModal from "../BaseModal/BaseModal";

import styles from "./user-details.module.css";
import { userSchema } from "@/validation/schemas/user.schema";
import UserDetailsForm from "@/components/Forms/UserDetails/UserDetailsForm";
import { useCityStore } from "@/store/city.store";
import { useEffect, useState } from "react";
import { useUserStore } from "@/store/user.store";
import { useNavigate } from "react-router-dom";

const UserDetailsModal = ({ open, onClose }) => {
  const [gender, setGender] = useState("male");

  const navigate = useNavigate();

  const { cities, getCities } = useCityStore();
  const { updateUserById } = useUserStore();

  const { errors, values, handleChange, resetForm, setFieldValue } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      age: 18,
      location: "",
    },
    validationSchema: userSchema,
  });

  const disableSubmit = [
    values.firstName,
    values.lastName,
    values.location,
  ].some((value) => !value.length);

  useEffect(() => {
    getCities();

    return () => resetForm();
  }, []);

  const handleSendData = () => {
    if (JSON.parse(localStorage.getItem("currentUserId"))) {
      updateUserById(JSON.parse(localStorage.getItem("currentUserId")), {
        ...values,
        gender,
      }).then(() => {
        resetForm();
        navigate("/");
      });
    }
  };

  const handleCitySelect = (city) => setFieldValue("location", city);

  const handleGender = ({ value }) => setGender(value);

  return (
    <BaseModal
      open={open}
      onClose={onClose}
      title="User Details Form"
      maxWidth={550}
      submitBtnText="Send"
      cancelBtnText="Cancel"
      onCancel={onClose}
      onSubmit={handleSendData}
      disabled={disableSubmit}
    >
      <div className={styles["user-details"]}>
        <UserDetailsForm
          errors={errors}
          values={values}
          handleChange={handleChange}
          onClick={handleGender}
          cities={cities}
          onCitySelect={handleCitySelect}
        />
      </div>
    </BaseModal>
  );
};

export default UserDetailsModal;
