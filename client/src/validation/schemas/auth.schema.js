import * as Yup from "yup";

export const authSchema = Yup.object().shape({
  password: Yup.string()
    .trim()
    .required("Password field is required")
    .min(5, "Password must contains at least 5 characters"),
  email: Yup.string()
    .trim()
    .email("Email must be in a valid format")
    .required("Email field is required"),
});
