import BaseInput from "@/components/Inputs/BaseInput/BaseInput";
import styles from "./right-side.module.css";

import { FaRegEyeSlash, FaRegEye, FaEnvelope } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";

import { Link, useNavigate, useSearchParams } from "react-router-dom";

import FacebookLogo from "@/assets/icons/socialMedias/facebook.svg";

import dayjs from "dayjs";

import { useEffect, useState } from "react";
import BaseButton from "@/components/Buttons/BaseButton/BaseButton";
import { useFormik } from "formik";
import { authSchema } from "@/validation/schemas/auth.schema";
import { useTranslation } from "react-i18next";
import { useAuthStore } from "@/store/auth.store";
import { useUserStore } from "@/store/user.store";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import UserDetailsModal from "@/components/Modals/UserDetails/UserDetails";

const RightSide = ({ isSignUpForm }) => {
  const { t } = useTranslation();

  const { signIn, signUp } = useAuthStore();
  const { getUserViaFacebook } = useUserStore();

  const navigate = useNavigate();
  const [query, setQuery] = useSearchParams();

  const [, setAccessToken] = useLocalStorage("access_token", "");
  const [currentUserId, setCurrentUserId] = useLocalStorage(
    "currentUserId",
    ""
  );

  const { errors, values, handleChange, resetForm } = useFormik({
    initialValues: {
      password: "",
      email: "",
    },
    validationSchema: authSchema,
  });

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (query.get("code")) {
      getUserViaFacebook(query.get("code")).then((user) => {
        const data = {
          email: user?.email,
          gender: user?.gender,
          firstName: user?.name.split(" ")[0],
          lastName: user?.name.split(" ")[1],
          age: dayjs().year() - Number(user?.birthday.split("/").at(-1)),
          type: "facebook",
        };

        signUp(data).then(() => {
          const { email, type } = data;

          signIn({ email, type }).then((userId) => {
            setCurrentUserId(userId);
            navigate("/");
          });
        });
      });
    }
  }, [query]);

  // useEffect(() => {
  //   if (currentUserId && currentUserId.length) navigate("/");
  // }, [currentUserId.length]);

  useEffect(() => {
    resetForm();
  }, [navigate]);

  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword((prev) => !prev);
  };

  const handleSignIn = () => {
    signIn({ ...values, type: "basic" }).then((userId) => {
      setCurrentUserId(userId);
      setIsOpen(true);
    });
  };

  const handleSignUp = () => {
    signUp({ ...values, type: "basic" }).then((accessToken) => {
      setAccessToken(accessToken);

      if (accessToken) navigate("/sign-in");
    });
  };

  return (
    <div className={styles["right-side"]}>
      <form className={styles["right-side-form"]}>
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
        <Link
          to={`https://www.facebook.com/v19.0/dialog/oauth?client_id=828489919109940&redirect_uri=http://localhost:5173/sign-in&state=st=state123abc,ds=123456789&scope=${encodeURIComponent(
            "email,user_location,user_gender,user_birthday,user_hometown,user_age_range"
          )}`}
          className={styles["right-side-actions-facebook-link"]}
          target="_self"
        >
          <img
            src={FacebookLogo}
            className={styles["right-side-actions-facebook-link-icon"]}
          />
          <span className={styles["right-side-actions-facebook-link-label"]}>
            {isSignUpForm ? "sign up" : "sign in"} via Facebook
          </span>
        </Link>
        {!isSignUpForm && (
          <Link to="/sign-up" className={styles["right-side-actions-link"]}>
            {t("Auth form sign up link")}
          </Link>
        )}
      </div>
      <UserDetailsModal open={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export default RightSide;
