import BaseInput from "@/components/Inputs/BaseInput/BaseInput";
import styles from "./right-side.module.css";

import { FaUserLarge, FaRegEyeSlash, FaRegEye, FaEnvelope } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";

import { Link } from "react-router-dom";

import { useState } from "react";
import BaseButton from "@/components/Buttons/BaseButton/BaseButton";

const RightSide = ({ isSignUpForm }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [authData, setAuthData] = useState({
    username: "",
    password: "",
    email: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAuthData(prev => ({ ...prev, [name]: value }));
  };

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
          value={authData.username}
          placeholder="Username"
          labelText="Username"
          inputId="username"
          name="username"
          leftIcon={<FaUserLarge size="1.25rem" color="rgba(51, 51, 51, 0.5)" />}
          onChange={handleChange}
        />
        { 
          isSignUpForm && (
            <BaseInput
              type="text"
              value={authData.email}
              placeholder="Email"
              labelText="Email"
              inputId="email"
              name="email"
              leftIcon={<FaEnvelope size="1.25rem" color="rgba(51, 51, 51, 0.5)" />}
              onChange={handleChange}
            />
          ) 
        }
        <BaseInput
          type={showPassword ? "text" : "password"}
          value={authData.password}
          placeholder="Password"
          labelText="Password"
          inputId="password"
          name="password"
          leftIcon={<FaLock size="1.25rem" color="rgba(51, 51, 51, 0.5)" />}
          rightIcon={
            showPassword ? 
              <FaRegEyeSlash size="1.25rem" color="rgba(51, 51, 51, 0.5)" /> : 
              <FaRegEye size="1.25rem" color="rgba(51, 51, 51, 0.5)" />
          }
          onChange={handleChange}
          onClick={handleShowPassword}
        />
      </form>
      <div className={styles["right-side-actions"]}>
        <BaseButton 
          isFullWidth
          label={isSignUpForm ? "Sign Up" : "Sign In"}
          onClick={isSignUpForm ? handleSignIn : handleSignUp}
        />
        {
          !isSignUpForm && (
            <Link
              to="sign-up"
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