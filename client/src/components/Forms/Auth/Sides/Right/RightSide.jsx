import BaseInput from "@/components/Inputs/BaseInput/BaseInput";
import styles from "./right-side.module.css";

import { FaUserLarge, FaRegEyeSlash, FaRegEye, FaEnvelope } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";

import { Link } from "react-router-dom";

import { useState } from "react";
import BaseButton from "@/components/Buttons/BaseButton/BaseButton";
import { useFormik } from "formik";
import { authSchema } from "@/validation/schemas/auth.schema";

const RightSide = ({ isSignUpForm }) => {
  const {
    errors,
    values,
    handleChange,
    handleBlur,
  } = useFormik({
    initialValues: {
      username: "",
      password: "",
      email: ""
    },
    validationSchema: authSchema.omit(!isSignUpForm ? ["email"] : "")
  });

  const [showPassword, setShowPassword] = useState(false);
  const [currentFieldName, setCurrentFieldName] = useState("");

  const handleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword(prev => !prev);
  };

  const handleSignIn = () => alert("In development");
  const handleSignUp = () => alert("In development");
  
  return (
    <div className={styles["right-side"]}>
      <form className={styles["right-side-form"]}>
        <BaseInput
          type="text"
          value={values.username}
          placeholder="Username"
          labelText="Username"
          inputId="username"
          name="username"
          leftIcon={<FaUserLarge size="1rem" color="rgba(51, 51, 51, 0.5)" />}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={(e) => setCurrentFieldName(e.target.name)}
          showError={currentFieldName === "username" || errors["username"]}
          error={errors["username"]}
        />
        { 
          isSignUpForm && (
            <BaseInput
              type="text"
              value={values.email}
              placeholder="Email"
              labelText="Email"
              inputId="email"
              name="email"
              leftIcon={<FaEnvelope size="1rem" color="rgba(51, 51, 51, 0.5)" />}
              onChange={handleChange}
              onBlur={handleBlur}
              onFocus={(e) => setCurrentFieldName(e.target.name)}
              showError={currentFieldName === "email" || errors["email"]}
              error={errors["email"]}
            />
          ) 
        }
        <BaseInput
          type={showPassword ? "text" : "password"}
          value={values.password}
          placeholder="Password"
          labelText="Password"
          inputId="password"
          name="password"
          leftIcon={<FaLock size="1rem" color="rgba(51, 51, 51, 0.5)" />}
          rightIcon={
            showPassword ? 
              <FaRegEyeSlash size="1.25rem" color="rgba(51, 51, 51, 0.5)" /> : 
              <FaRegEye size="1.25rem" color="rgba(51, 51, 51, 0.5)" />
          }
          onChange={handleChange}
          onClick={handleShowPassword}
          onBlur={handleBlur}
          onFocus={(e) => setCurrentFieldName(e.target.name)}
          showError={currentFieldName === "password" || errors["password"]}
          error={errors["password"]}
        />
      </form>
      <div className={styles["right-side-actions"]}>
        <BaseButton 
          isFullWidth
          label={isSignUpForm ? "Sign Up" : "Sign In"}
          onClick={isSignUpForm ? handleSignIn : handleSignUp}
          disabled={errors && Object.keys(errors).length}
        />
        {
          !isSignUpForm && (
            <Link
              to="/sign-up"
              className={styles["right-side-actions-link"]}
            >
              Don't have an account?
            </Link>
          )
        }
      </div>
    </div>
  );
};

export default RightSide;