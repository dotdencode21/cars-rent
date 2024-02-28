import * as Yup from "yup";

export const authSchema = Yup.object().shape({
  username: Yup
              .string()
              .required("Username field is required")
              .min(3, "Username must contains at least 3 characters"),
  password: Yup
              .string()
              .required("Password field is required")
              .min(5, "Password must contains at least 5 characters"),
  email: Yup
              .string()
              .email("Email must be in a valid format")
              .required("Email field is required")
});