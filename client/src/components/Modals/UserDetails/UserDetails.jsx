import BaseModal from "../BaseModal/BaseModal";

import styles from "./user-details.module.css";
import UserDetailsForm from "@/components/Forms/UserDetails/UserDetailsForm";
import { useCityStore } from "@/store/city.store";
import { useEffect, useState } from "react";
import { useUserStore } from "@/store/user.store";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";

const UserDetailsModal = ({ open, onClose, user = null }) => {
  const [gender, setGender] = useState("male");

  const navigate = useNavigate();

  const { cities, getCities } = useCityStore();
  const { updateUserById } = useUserStore();

  const isUser = user && Object.keys(user).length;

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    age: 18,
    location: "",
    locationType: "",
  });

  useEffect(() => {
    if (isUser) {
      setValues({
        firstName: user?.name.split(" ")[0],
        lastName: user?.name.split(" ")[1],
        age: dayjs().year() - Number(user?.birthday.split("/").at(-1)),
        location: "",
        locationType: "",
      });
    }
  }, [isUser]);

  const disableSubmit = [
    values.firstName,
    values.lastName,
    values.location,
  ].some((value) => !value.length);

  useEffect(() => {
    getCities();

    return () =>
      setValues({
        firstName: "",
        lastName: "",
        age: 18,
        location: "",
        locationType: "",
      });
  }, []);

  const handleSendData = () => {
    if (JSON.parse(localStorage.getItem("currentUserId"))) {
      updateUserById(JSON.parse(localStorage.getItem("currentUserId")), {
        ...values,
        gender,
      }).then(() => {
        setValues({
          firstName: "",
          lastName: "",
          age: 18,
          location: "",
        });
        navigate("/");
      });
    }
  };

  const handleCitySelect = ({ name, type }) =>
    setValues((prev) => ({ ...prev, location: name, locationType: type }));

  const handleGender = ({ value }) => setGender(value);

  const handleChange = ({ target: { name, value } }) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  };

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
