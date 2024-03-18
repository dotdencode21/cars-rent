import BaseInput from "@/components/Inputs/BaseInput/BaseInput";
import styles from "./right-side.module.css";

import {
  FaUserLarge,
  FaRegEyeSlash,
  FaRegEye,
  FaEnvelope,
} from "react-icons/fa6";
import { FaLock } from "react-icons/fa";

import { Link, useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
import BaseButton from "@/components/Buttons/BaseButton/BaseButton";
import { useFormik } from "formik";
import { authSchema } from "@/validation/schemas/auth.schema";
import { useTranslation } from "react-i18next";
import { useAuthStore } from "@/store/auth.store";
import { useUserStore } from "@/store/user.store";
import { useLocalStorage } from "@/hooks/useLocalStorage";

const RightSide = ({ isSignUpForm }) => {
  const { t } = useTranslation();

  const { signIn, signUp } = useAuthStore();
  const { getUserById } = useUserStore();

  const navigate = useNavigate();

  const [accessToken, setAccessToken] = useLocalStorage("access_token", "");

  const { errors, values, handleChange, resetForm } = useFormik({
    initialValues: {
      username: "",
      password: "",
      email: "",
    },
    validationSchema: authSchema.omit(!isSignUpForm ? ["email"] : ""),
  });

  useEffect(() => {
    resetForm();
  }, [navigate]);

  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword((prev) => !prev);
  };

  const handleSignIn = () => {
    signIn(values).then((userId) => {
      getUserById(userId).then(() => {
        navigate("/");
      });
    });
  };

  const handleSignUp = () => {
    signUp(values).then((accessToken) => {
      setAccessToken(accessToken);

      if (accessToken) navigate("/sign-in");
    });
  };

  return (
    <div className={styles["right-side"]}>
      <form className={styles["right-side-form"]}>
        <BaseInput
          type="text"
          value={values.username}
          placeholder={t("Auth form username input")}
          labelText={t("Auth form username input")}
          inputId="username"
          name="username"
          leftIcon={<FaUserLarge size="1rem" color="rgba(51, 51, 51, 0.5)" />}
          onChange={handleChange}
          error={errors["username"]}
        />
        {isSignUpForm && (
          <BaseInput
            type="text"
            value={values.email}
            placeholder={t("Auth form email input")}
            labelText={t("Auth form email input")}
            inputId="email"
            name="email"
            leftIcon={<FaEnvelope size="1rem" color="rgba(51, 51, 51, 0.5)" />}
            onChange={handleChange}
            error={errors["email"]}
          />
        )}
        <BaseInput
          type={showPassword ? "text" : "password"}
          value={values.password}
          placeholder={t("Auth form password input")}
          labelText={t("Auth form password input")}
          inputId="password"
          name="password"
          leftIcon={<FaLock size="1rem" color="rgba(51, 51, 51, 0.5)" />}
          rightIcon={
            showPassword ? (
              <FaRegEyeSlash size="1.25rem" color="rgba(51, 51, 51, 0.5)" />
            ) : (
              <FaRegEye size="1.25rem" color="rgba(51, 51, 51, 0.5)" />
            )
          }
          onChange={handleChange}
          onClick={handleShowPassword}
          error={errors["password"]}
        />
      </form>
      <div className={styles["right-side-actions"]}>
        <BaseButton
          isFullWidth
          label={
            isSignUpForm
              ? t("Auth form sign up button label")
              : t("Auth form sign in button label")
          }
          onClick={isSignUpForm ? handleSignUp : handleSignIn}
          disabled={
            (errors && Object.keys(errors).length) ||
            !Object.values(values).some(Boolean)
          }
        />
        {!isSignUpForm && (
          <Link to="/sign-up" className={styles["right-side-actions-link"]}>
            {t("Auth form sign up link")}
          </Link>
        )}
      </div>
    </div>
  );
};

export default RightSide;
